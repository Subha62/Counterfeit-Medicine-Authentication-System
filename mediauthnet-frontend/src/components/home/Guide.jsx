// import { Box, styled, Typography } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// import CustomButton from "./CustomButton";

// const Guide = () => {
//   const navigate = useNavigate();

//   const CustomBox = styled(Box)(({ theme }) => ({
//     width: "45%",
//     [theme.breakpoints.down("md")]: {
//       width: "85%",
//     },
//   }));

//   const StepText = styled(Typography)(({ theme }) => ({
//     fontSize: "15px",
//     fontWeight: 500,
//     color: "#3B3C45",
//     marginTop: theme.spacing(1),
//     lineHeight: "1.6rem",
//     textAlign: "center",
//   }));

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: "5rem",
//       }}
//     >
//       <div
//         style={{
//           width: "5%",
//           height: "5px",
//           backgroundColor: "#000339",
//           margin: "0 auto",
//         }}
//       ></div>

//       <Typography
//         variant="h3"
//         sx={{
//           fontSize: "35px",
//           fontWeight: "bold",
//           color: "#000339",
//           my: 3,
//         }}
//       >
//         How It Works
//       </Typography>

//       <CustomBox>
//         <Typography
//           variant="body2"
//           sx={{
//             fontSize: "16px",
//             fontWeight: "500",
//             color: "#5A6473",
//             textAlign: "center",
//             marginBottom: "2rem",
//             lineHeight: "1.8rem",
//           }}
//         >
//           Our platform uses <strong>Federated Learning (FL)</strong> to
//           authenticate medicines with high accuracy while maintaining full data
//           privacy. Each pharmaceutical party — manufacturers, distributors,
//           pharmacies — trains a local AI model on their own datasets. Only{" "}
//           <strong>model weights/updates</strong> (never raw data) are securely
//           shared with the central aggregator.
//           <br />
//           <br />
//           These updates form a powerful <strong>global detection model</strong>
//           that detects packaging, patterns, and microscopic features to identify
//           counterfeit medicines.
//         </Typography>
//       </CustomBox>

//       {/* Steps Section */}
//       <Box
//         sx={{
//           width: "70%",
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "1rem",
//           marginBottom: "3rem",
//           flexWrap: "wrap",
//         }}
//       >
//         <Box sx={{ width: { xs: "100%", sm: "32%" }, textAlign: "center", mb: 3 }}>
//           <Typography variant="h6" fontWeight="bold" color="#000339">
//             1. Local Training
//           </Typography>
//           <StepText>
//             Each pharma partner trains locally without sharing sensitive data.
//           </StepText>
//         </Box>

//         <Box sx={{ width: { xs: "100%", sm: "32%" }, textAlign: "center", mb: 3 }}>
//           <Typography variant="h6" fontWeight="bold" color="#000339">
//             2. Secure Updates
//           </Typography>
//           <StepText>
//             Only encrypted model updates are sent securely.
//           </StepText>
//         </Box>

//         <Box sx={{ width: { xs: "100%", sm: "32%" }, textAlign: "center", mb: 3 }}>
//           <Typography variant="h6" fontWeight="bold" color="#000339">
//             3. AI Verification
//           </Typography>
//           <StepText>
//             Global model detects whether medicine is genuine or fake.
//           </StepText>
//         </Box>
//       </Box>

//       {/* ⭐ SCROLL TARGET + BUTTON */}
//       <div id="guide-section">
//         <CustomButton
//           backgroundColor="#0F1B4C"
//           color="#fff"
//           buttonText="See Full Guides"
//           guideBtn={true}
//           onClick={() => navigate("/guides")}
//         />
//       </div>
//     </Box>
//   );
// };

// export default Guide;


import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

const Guide = () => {
  const navigate = useNavigate();

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "45%",
    [theme.breakpoints.down("md")]: { width: "85%" },
  }));

  const StepText = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 500,
    color: "#3B3C45",
    marginTop: theme.spacing(1),
    lineHeight: "1.6rem",
    textAlign: "center",
  }));

  return (
    <Box
      id="guide-section"   // ⭐ VERY IMPORTANT
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5rem",
      }}
    >
      
      <div style={{ width: "5%", height: "5px", backgroundColor: "#000339" }}></div>

      <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}>
        How It Works
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
            marginBottom: "2rem",
            lineHeight: "1.8rem",
          }}
        >
          Our platform uses <strong>Federated Learning (FL)</strong> to authenticate medicines...
        </Typography>
      </CustomBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
        onClick={() => navigate("/guides")}
      />
    </Box>
  );
};

export default Guide;

