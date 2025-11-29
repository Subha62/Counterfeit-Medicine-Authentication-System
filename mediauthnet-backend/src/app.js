// Load environment variables FIRST
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import predictRoutes from "./routes/predict.js";
import emailRoutes from "./routes/email.js";



// Initialize Express App
const app = express();

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());   // <-- REQUIRED for reading JSON body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/predict", predictRoutes);
app.use("/api/email", emailRoutes);



// =====================
// MongoDB Connection
// =====================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Database Error:", err));

export default app;
