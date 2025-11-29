import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LayersIcon from "@mui/icons-material/Layers";
import UpdateIcon from "@mui/icons-material/Update";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function GuidesPage() {
  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* ===========================
          PAGE TITLE
      ============================ */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{ color: "#0F1B4C", mb: 4 }}
      >
        Counterfeit Medicine Detection using Federated Learning
      </Typography>

      {/* ===========================
          USER-FRIENDLY OVERVIEW
      ============================ */}
      <Typography
        variant="h6"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 2, color: "#000839" }}
      >
        🧪 Simple Overview for Users
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          color: "#3B3C45",
          mb: 6,
          lineHeight: "1.8rem",
        }}
      >
        This system allows users to check if a medicine is <b>Genuine</b> or
        <b> Counterfeit</b> instantly. Simply upload the medicine image or scan
        the product. Our AI model analyzes the packaging and hidden features
        using a global model trained securely across multiple sources via
        Federated Learning.
      </Typography>

      {/* ===========================
          4-STEP USER WORKFLOW
      ============================ */}
      <Grid container spacing={4} justifyContent="center">
        {/* Step 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={paperStyle}>
            <ScienceIcon sx={iconStyle} />
            <Typography sx={titleStyle}>1. Upload Image</Typography>
            <Typography sx={descStyle}>
              Users upload a medicine image or scan QR code.
            </Typography>
          </Paper>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={paperStyle}>
            <PsychologyIcon sx={iconStyle} />
            <Typography sx={titleStyle}>2. AI Model Analysis</Typography>
            <Typography sx={descStyle}>
              The global AI model evaluates the image for authenticity.
            </Typography>
          </Paper>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={paperStyle}>
            <SecurityIcon sx={iconStyle} />
            <Typography sx={titleStyle}>3. Authenticity Check</Typography>
            <Typography sx={descStyle}>
              System compares with patterns of genuine medicine packaging.
            </Typography>
          </Paper>
        </Grid>

        {/* Step 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={paperStyle}>
            <CheckCircleIcon sx={iconStyle} />
            <Typography sx={titleStyle}>4. Result</Typography>
            <Typography sx={descStyle}>
              Displays whether medicine is Genuine or Counterfeit.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* ===========================
          DEVELOPER SECTION TITLE
      ============================ */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ mt: 6, mb: 2, color: "#000839" }}
      >
        👨‍💻 Technical Guide for Developers
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          color: "#5A6473",
          mb: 6,
          lineHeight: "1.8rem",
        }}
      >
        This section explains how the entire system works internally — including
        Federated Learning workflow, AI model pipeline, backend API flow, and
        local + global model architecture.
      </Typography>

      {/* ===========================
          FEDERATED LEARNING WORKFLOW
      ============================ */}
      <Grid container spacing={4} justifyContent="center">
        {/* FL Step 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={paperStyle}>
            <LayersIcon sx={iconStyle} />
            <Typography sx={titleStyle}>1. Local Model Training</Typography>
            <Typography sx={descStyle}>
              Manufacturers and pharmacies train models locally using their
              private datasets — no data leaves the device.
            </Typography>
          </Paper>
        </Grid>

        {/* FL Step 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={paperStyle}>
            <UpdateIcon sx={iconStyle} />
            <Typography sx={titleStyle}>2. Model Updates Sent</Typography>
            <Typography sx={descStyle}>
              Only model gradients/weights are uploaded to server securely.
            </Typography>
          </Paper>
        </Grid>

        {/* FL Step 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={paperStyle}>
            <SecurityIcon sx={iconStyle} />
            <Typography sx={titleStyle}>3. Global Model Aggregation</Typography>
            <Typography sx={descStyle}>
              Central server aggregates updates into a powerful unified model.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* ===========================
          FINAL SUMMARY
      ============================ */}
      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        sx={{ mt: 6, color: "#0F1B4C" }}
      >
        Secure • Private • Distributed • Accurate
      </Typography>

      <Typography
        textAlign="center"
        sx={{ maxWidth: "700px", mx: "auto", mt: 2, color: "#5A6473" }}
      >
        With Federated Learning, counterfeit detection becomes safer, smarter,
        and far more scalable — all while keeping sensitive data 100% private.
      </Typography>
    </Box>
  );
}

/* ===============================
   SHARED STYLE VARIABLES
================================ */
const paperStyle = {
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

const iconStyle = {
  fontSize: 60,
  color: "#0F1B4C",
};

const titleStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  mt: 2,
  color: "#000839",
};

const descStyle = {
  color: "#5A6473",
  marginTop: "10px",
  lineHeight: "1.6rem",
};
