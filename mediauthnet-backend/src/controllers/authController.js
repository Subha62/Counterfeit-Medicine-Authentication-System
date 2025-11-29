// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// // REGISTER USER
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user exists
//     const existing = await User.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || "user",   // default role: user
//     });

//     await user.save();

//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Register Error:", error);
//     res.status(500).json({ message: "Server error during registration" });
//   }
// };

// // LOGIN USER
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     // Compare password
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Incorrect password" });

//     // Create JWT Token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error during login" });
//   }
// };




import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import nodemailer from "nodemailer";

/* ---------------------------------------------------------
   ✉️ SEND OTP EMAIL FUNCTION
--------------------------------------------------------- */
const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Gmail
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email - MediAuthNet",
    html: `
      <h2>Verify Your MediAuthNet Account</h2>
      <p>Your OTP code is:</p>
      <h1 style="font-size: 32px;">${otp}</h1>
      <p>This OTP will expire in 5 minutes.</p>
    `,
  });
};

/* ---------------------------------------------------------
    REGISTER USER (SEND OTP + CREATE UNVERIFIED ACCOUNT)
--------------------------------------------------------- */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Create unverified user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
      otp,
      otpExpires: Date.now() + 5 * 60 * 1000, // expires in 5 min
      isVerified: false,
    });

    await user.save();

    // Send OTP email
    await sendOTP(email, otp);

    return res.status(201).json({
      message: "OTP sent to your email. Please verify to complete registration.",
      email: user.email,
    });

  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

/* ---------------------------------------------------------
    VERIFY OTP (EMAIL VERIFICATION)
--------------------------------------------------------- */
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    if (user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpires < Date.now())
      return res.status(400).json({ message: "OTP has expired" });

    // Mark user as verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    res.json({ message: "Email verified successfully" });

  } catch (error) {
    console.error("Verify OTP Error:", error);
    res.status(500).json({ message: "OTP verification failed" });
  }
};

/* ---------------------------------------------------------
    RESEND OTP
--------------------------------------------------------- */
export const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // New OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;

    await user.save();

    await sendOTP(email, otp);

    res.json({ message: "New OTP sent to your email" });

  } catch (error) {
    console.error("Resend OTP Error:", error);
    res.status(500).json({ message: "Error resending OTP" });
  }
};

/* ---------------------------------------------------------
    LOGIN USER (ONLY IF VERIFIED)
--------------------------------------------------------- */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    // Restrict login without verification
    if (!user.isVerified)
      return res.status(401).json({
        message: "Your email is not verified. Please check your email."
      });

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Incorrect password" });

    // Create token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
