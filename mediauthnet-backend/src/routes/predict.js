// import express from "express";
// import multer from "multer";
// import { auth } from "../middleware/auth.js";
// import { handlePredict } from "../controllers/predictController.js";
// import path from "path";

// // Upload storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");  // save images in backend/uploads
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`);
//   },
// });

// const upload = multer({ storage });

// const router = express.Router();

// // POST → Upload image → ML prediction (JWT protected)
// router.post("/", auth, upload.single("image"), handlePredict);

// export default router;




import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import jwt from "jsonwebtoken";

import { auth } from "../middleware/auth.js";

const router = express.Router();

/* -----------------------------
   MULTER STORAGE CONFIGURATION
------------------------------ */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const unique = `${Date.now()}-${Math.random().toString(36).substring(2)}${ext}`;
    cb(null, unique);
  },
});

/* -----------------------------
   FILE TYPE VALIDATION
------------------------------ */
function fileFilter(req, file, cb) {
  const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  if (!allowed.includes(file.mimetype)) {
    cb(new Error("Only image files are allowed"), false);
  } else {
    cb(null, true);
  }
}

const upload = multer({ storage, fileFilter });

/* -----------------------------
   MANUFACTURER PUBLIC KEY
------------------------------ */
const publicKeyPath = path.join(process.cwd(), "manufacturer_tools/keys/public.pem");
let PUBLIC_KEY = "";

if (fs.existsSync(publicKeyPath)) {
  PUBLIC_KEY = fs.readFileSync(publicKeyPath);
} else {
  console.error("⚠ Public Key NOT FOUND for QR verification!");
}

/* -----------------------------
   VERIFY SIGNED QR TOKEN
------------------------------ */
function verifyToken(token) {
  try {
    const payload = jwt.verify(token, PUBLIC_KEY, { algorithms: ["RS256"] });
    return { ok: true, payload };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

/* -----------------------------
   ⭐ MAIN PREDICT API
------------------------------ */
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    /* -----------------------------
       1️⃣ CHECK IF FILE EXISTS
    ------------------------------ */
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const filePath = req.file.path;
    const qrData = req.body.qrData || null;

    /* -----------------------------
       2️⃣ VERIFY QR SIGNATURE (IF PROVIDED)
    ------------------------------ */
    let isSignatureValid = false;
    let tokenPayload = null;

    if (qrData) {
      const result = verifyToken(qrData);
      if (result.ok) {
        isSignatureValid = true;
        tokenPayload = result.payload;
      }
    }

    /* -----------------------------
       3️⃣ IF QR IS VALID → Product is genuine
    ------------------------------ */
    if (isSignatureValid) {
      return res.json({
        method: "signature-verification",
        status: "genuine",
        message: "QR signature verified successfully!",
        productData: tokenPayload,
      });
    }

    /* -----------------------------
       4️⃣ CALL PYTHON INFERENCE SERVER
    ------------------------------ */
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));

    const response = await axios.post("http://localhost:9000/predict", form, {
      headers: form.getHeaders(),
    });

    /* -----------------------------
       5️⃣ DELETE IMAGE AFTER PROCESSING
    ------------------------------ */
    fs.unlink(filePath, (err) => {
      if (err) console.log("File cleanup failed:", err);
    });

    /* -----------------------------
       6️⃣ SEND RESULT TO FRONTEND
    ------------------------------ */
    return res.json({
      method: "federated-ml",
      status: response.data.label,
      confidence: response.data.score,
    });

  } catch (error) {
    console.error("Prediction Error:", error);

    return res.status(500).json({
      error: "Prediction failed",
      details: error.message,
    });
  }
});

export default router;
