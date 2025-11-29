



import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import InsightsIcon from "@mui/icons-material/Insights";

const ServicesPage = () => {
  return (
    <Box
      sx={{
        padding: "60px 20px",
        backgroundColor: "#F5F7FA",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{ color: "#0F1B4C", mb: 5 }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Service 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={serviceBox}>
            <VerifiedIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Medicine Authentication</Typography>
            <Typography sx={descStyle}>
              Verify whether a medicine is genuine or counterfeit using FL-powered AI.
            </Typography>
          </Paper>
        </Grid>

        {/* Service 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={serviceBox}>
            <SecurityIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Tamper Detection</Typography>
            <Typography sx={descStyle}>
              Identify packaging tampering and suspicious alterations using image analysis.
            </Typography>
          </Paper>
        </Grid>

        {/* Service 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={serviceBox}>
            <PrivacyTipIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Privacy-Preserving AI</Typography>
            <Typography sx={descStyle}>
              Ensure full data privacy—your medical data never leaves your device.
            </Typography>
          </Paper>
        </Grid>

        {/* Service 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={serviceBox}>
            <InsightsIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Real-Time Results</Typography>
            <Typography sx={descStyle}>
              Get instant authenticity results in a user-friendly dashboard.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesPage;

const serviceBox = {
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

const iconStyle = {
  fontSize: 55,
  color: "#0F1B4C",
};

const titleStyle = {
  mt: 2,
  mb: 1,
  fontSize: "18px",
  fontWeight: "bold",
  color: "#000839",
};

const descStyle = {
  color: "#5A6473",
  lineHeight: "1.6rem",
};