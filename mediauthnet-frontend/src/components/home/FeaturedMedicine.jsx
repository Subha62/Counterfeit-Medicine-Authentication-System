import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import HealingIcon from "@mui/icons-material/Healing";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ScienceIcon from "@mui/icons-material/Science";
import MedicationIcon from "@mui/icons-material/Medication";

const FeaturedMedicine = () => {
  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{ color: "#0F1B4C", mb: 4 }}
      >
        Featured Medicines (Federated Learning Verified)
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto",
          color: "#5A6473",
          mb: 5,
          lineHeight: "1.8rem",
        }}
      >
        These high–risk medicines are frequently counterfeited globally.  
        MediAuthNet uses <strong>Federated Learning (FL)</strong> to detect fake  
        packaging, QR manipulation, hologram mismatches, and printing defects —  
        all while keeping manufacturer data 100% private.
      </Typography>

      {/* Medicine Cards */}
      <Grid container spacing={4} justifyContent="center">

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <HealingIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Humira (Adalimumab)</Typography>
            <Typography sx={descStyle}>
              FL model detects micro-printing inconsistencies & label pattern shifts.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <MedicationIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Amoxicillin 500mg</Typography>
            <Typography sx={descStyle}>
              Identifies fake blister packs, wrong batch codes & QR tampering.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <VaccinesIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Insulin (Rapid Acting)</Typography>
            <Typography sx={descStyle}>
              Vial cap tampering, fill-level anomalies & label mismatch detection.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={cardStyle}>
            <ScienceIcon sx={iconStyle} />
            <Typography sx={titleStyle}>Paracetamol 650mg</Typography>
            <Typography sx={descStyle}>
              FL compares global packaging patterns to detect counterfeit tablets.
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
};

const cardStyle = {
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

export default FeaturedMedicine;
