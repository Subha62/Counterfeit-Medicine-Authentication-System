// import express from "express";
// import { registerUser, loginUser } from "../controllers/authController.js";

// const router = express.Router();

// // Register
// router.post("/register", registerUser);

// // Login
// router.post("/login", loginUser);

// export default router;



import express from "express";
import {
  registerUser,
  loginUser,
  verifyOTP,
  resendOTP
} from "../controllers/authController.js";

const router = express.Router();

// Register (send OTP)
router.post("/register", registerUser);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Resend OTP
router.post("/resend-otp", resendOTP);

// Login (only after verification)
router.post("/login", loginUser);

export default router;
