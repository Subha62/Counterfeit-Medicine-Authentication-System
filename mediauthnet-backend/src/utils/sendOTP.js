import nodemailer from "nodemailer";

export const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  // your gmail
      pass: process.env.EMAIL_PASS,  // app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "MediAuthNet Email Verification",
    html: `
      <h2>Verify your email</h2>
      <p>Your OTP code is:</p>
      <h1 style="font-size: 32px">${otp}</h1>
      <p>This OTP is valid for <strong>5 minutes</strong>.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
