import dotenv from "dotenv";
dotenv.config();

import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/email/send-email
router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    // Email to user
    await transporter.sendMail({
      from: `MedAuthNet <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting <strong>MedAuthNet</strong>.</p>
        <p>Your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll reply soon.</p>
      `,
    });

    // Email to admin
    await transporter.sendMail({
      from: `MedAuthNet <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message From ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <blockquote>${message}</blockquote>
      `,
    });

    res.json({ success: true, message: "Emails sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// IMPORTANT
export default router;
