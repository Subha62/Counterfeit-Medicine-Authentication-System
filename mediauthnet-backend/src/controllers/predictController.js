// import History from "../models/History.js";
// import Product from "../models/Product.js";
// import { callInference } from "../utils/httpClient.js";
// import path from "path";

// export const handlePredict = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No image provided" });
//     }

//     const imagePath = path.resolve(req.file.path);
//     const { qrToken } = req.body;

//     let product = null;

//     // If QR token is provided, try verifying it
//     if (qrToken) {
//       product = await Product.findOne({ qrToken });

//       if (!product) {
//         console.log("QR NOT FOUND → might be counterfeit packaging");
//       }
//     }

//     // ----------------------------------------
//     // 🔍 1. Send image → Python AI model
//     // ----------------------------------------
//     let prediction = "unknown";
//     let confidence = 0;

//     try {
//       const mlResponse = await callInference(imagePath); 
//       prediction = mlResponse.prediction;   // 'genuine' | 'counterfeit'
//       confidence = mlResponse.confidence;   // 0–1
//     } catch (err) {
//       console.error("ML Prediction Error:", err);
//       return res.status(500).json({ message: "ML model error", error: err.message });
//     }

//     // ----------------------------------------
//     // 🔍 2. Combine QR result + ML result
//     // ----------------------------------------
//     let finalResult = "suspicious";

//     if (product && product.status === "active" && prediction === "genuine") {
//       finalResult = "authentic";
//     } 
//     else if (!product && prediction === "counterfeit") {
//       finalResult = "counterfeit";
//     } 
//     else if (product && prediction === "counterfeit") {
//       finalResult = "counterfeit";
//     } 
//     else {
//       finalResult = "suspicious";
//     }

//     // ----------------------------------------
//     // 🔍 3. Save verification event in History
//     // ----------------------------------------
//     const history = new History({
//       userId: req.user._id,
//       productId: product ? product._id : null,
//       imagePath: req.file.path,
//       prediction,
//       confidence,
//       qrToken: qrToken || null,
//       result: finalResult,
//     });

//     await history.save();

//     // ----------------------------------------
//     // 🔍 4. Send Response to frontend
//     // ----------------------------------------
//     return res.json({
//       message: "Prediction completed",
//       prediction,
//       confidence,
//       result: finalResult,
//       product,
//     });

//   } catch (error) {
//     console.error("PredictController Error:", error);
//     return res.status(500).json({ message: "Prediction failed", error: error.message });
//   }
// };



import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

import History from "../models/History.js";
import Product from "../models/Product.js";
import { callInference } from "../utils/httpClient.js";

/* ---------------------------------------------
   LOAD MANUFACTURER PUBLIC KEY FOR QR VERIFY
---------------------------------------------- */
const publicKeyPath = path.join(process.cwd(), "manufacturer_tools/keys/public.pem");
let PUBLIC_KEY = "";

if (fs.existsSync(publicKeyPath)) {
  PUBLIC_KEY = fs.readFileSync(publicKeyPath);
} else {
  console.warn("⚠ WARNING: Manufacturer public key NOT FOUND. QR verification will not work.");
}

/* ---------------------------------------------
   VERIFY SIGNED QR TOKEN
---------------------------------------------- */
function verifySignedQR(qrToken) {
  try {
    const decoded = jwt.verify(qrToken, PUBLIC_KEY, { algorithms: ["RS256"] });
    return { ok: true, payload: decoded };
  } catch (error) {
    return { ok: false, error };
  }
}

/* ---------------------------------------------
   MAIN PREDICTION CONTROLLER
---------------------------------------------- */
export const handlePredict = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const imagePath = path.resolve(req.file.path);
    const { qrToken } = req.body;

    let product = null;
    let qrVerified = false;

    /* ---------------------------------------------
       🔍 1. VERIFY QR SIGNATURE (Manufacturer-signed)
    ---------------------------------------------- */
    if (qrToken) {
      const verify = verifySignedQR(qrToken);

      if (verify.ok) {
        qrVerified = true;

        // match product from database
        product = await Product.findOne({ serialNumber: verify.payload.serial });

        if (!product) {
          console.log("❌ QR is real (signed), but product not in DB → maybe stolen");
        }
      } else {
        console.log("❌ QR signature invalid:", verify.error?.message);
      }
    }

    /* ---------------------------------------------
       🔍 2. ML Prediction (Federated Learning)
    ---------------------------------------------- */
    let prediction = "unknown";
    let confidence = 0;

    try {
      const result = await callInference(imagePath);

      prediction = result.prediction;   // 'genuine' or 'counterfeit'
      confidence = result.confidence;   // 0–1
    } catch (err) {
      console.error("ML Error:", err);
      return res.status(500).json({ message: "ML model error", error: err.message });
    }

    /* ---------------------------------------------
       🔍 3. Determine Final Result (Logic)
    ---------------------------------------------- */

    let finalResult = "suspicious";

    if (qrVerified && prediction === "genuine") {
      finalResult = "authentic";
    }
    else if (!qrVerified && prediction === "counterfeit") {
      finalResult = "counterfeit";
    }
    else if (qrVerified && prediction === "counterfeit") {
      finalResult = "counterfeit";
    }
    else {
      finalResult = "suspicious";
    }

    /* ---------------------------------------------
       🗑 4. Delete Uploaded Image (Cleanup)
    ---------------------------------------------- */
    try {
      fs.unlinkSync(imagePath);
    } catch (err) {
      console.warn("Could not delete uploaded file:", err.message);
    }

    /* ---------------------------------------------
       📝 5. Save History
    ---------------------------------------------- */
    await History.create({
      userId: req.user._id,
      productId: product ? product._id : null,
      prediction,
      confidence,
      qrToken: qrToken || null,
      result: finalResult,
      timestamp: new Date(),
    });

    /* ---------------------------------------------
       📤 6. Send Final Response
    ---------------------------------------------- */
    return res.json({
      message: "Verification completed",
      method: qrVerified ? "signature+ml" : "ml-only",
      qrVerified,
      prediction,
      confidence,
      finalResult,
      product,
    });

  } catch (error) {
    console.error("PredictController Error:", error);
    return res.status(500).json({ message: "Prediction failed", error: error.message });
  }
};

