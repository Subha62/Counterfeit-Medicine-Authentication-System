import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import serviceBg from "../../img/service-section.png";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      <Box
        id="services-section"
        sx={{
          backgroundColor: "#0F1B4C",
          borderRadius: "18px",
          padding: "40px",
          minHeight: "260px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "nowrap",
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: "0 0 48%" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#fff", mb: 2 }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              color: "#dbe2f0",
              fontSize: "16px",
              lineHeight: "1.5rem",
              mb: 3,
              maxWidth: "450px",
            }}
          >
            We provide a suite of AI-powered tools using <b>Federated Learning</b>{" "}
            to detect counterfeit medicines while ensuring complete data privacy.
          </Typography>

          <CustomButton
            buttonText="See Our Services"
            backgroundColor="#fff"
            color="#0F1B4C"
            onClick={() => navigate("/services-page")}
          />
        </Box>

        {/* RIGHT SIDE IMAGE */}
        <Box
          sx={{
            flex: "0 0 260px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={serviceBg}
            alt="Service"
            style={{
              width: "240px",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
