import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import api from "../../api/axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email passed from register page
  const email = location.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60); 
  const [message, setMessage] = useState("");

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle OTP inputs
  const handleChange = (value, index) => {
    if (value.length > 1) return; 
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move next
    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Submit OTP
  const handleVerify = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setMessage("Please enter the full 6-digit OTP");
      return;
    }

    try {
      const res = await api.post("/auth/verify-otp", {
        email,
        otp: otpCode,
      });

      setMessage("OTP Verified! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    }
  };

  // Resend OTP
  const handleResend = async () => {
    try {
      await api.post("/auth/resend-otp", { email });
      setMessage("New OTP sent!");
      setTimer(60);
    } catch (err) {
      setMessage("Error sending OTP");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#E6F0FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "450px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#0F1B4C">
          Verify Your Email
        </Typography>

        <Typography sx={{ mt: 1, color: "#687690" }}>
          Enter the 6-digit OTP sent to:
        </Typography>

        <Typography fontWeight="bold">{email}</Typography>

        {/* OTP BOXES */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            mb: 2,
          }}
        >
          {otp.map((value, index) => (
            <TextField
              key={index}
              id={`otp-${index}`}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: "22px" },
              }}
              sx={{ width: "50px" }}
            />
          ))}
        </Box>

        {/* Messages */}
        {message && (
          <Typography color="error" sx={{ mt: 1 }}>
            {message}
          </Typography>
        )}

        {/* Verify Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, backgroundColor: "#0F1B4C" }}
          onClick={handleVerify}
        >
          Verify OTP
        </Button>

        {/* Timer + Resend */}
        <Typography sx={{ mt: 3 }}>
          {timer > 0 ? (
            <>Resend OTP in <strong>{timer}s</strong></>
          ) : (
            <Button onClick={handleResend}>Resend OTP</Button>
          )}
        </Typography>
      </Box>
    </Box>
  );
}
