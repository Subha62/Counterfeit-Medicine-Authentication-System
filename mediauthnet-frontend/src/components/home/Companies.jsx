// import { Box, Container, styled, Typography } from "@mui/material";
// import React from "react";
// import logoImg from "../../img/logo.png";
// import starsImg from "../../img/Star.png";
// import logosImg from "../../img/logos.png";

// const Companies = () => {
//   const CustomContainer = styled(Container)(({ theme }) => ({
//     display: "flex",
//     justifyContent: "space-between",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       alignItems: "center",
//       textAlign: "center",
//       marginBottom: theme.spacing(4),
//     },
//   }));

//   const CustomBox = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down("md")]: {
//       marginBottom: theme.spacing(4),
//     },
//   }));

//   return (
//     <Box sx={{ mt: 10 }}>
//       <CustomContainer>
//         <CustomBox>
//           <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
//           <Typography
//             variant="body2"
//             sx={{
//               color: "#7D8589",
//               fontSize: "16px",
//               fontWeight: "bold",
//               mt: 2,
//             }}
//           >
//             More than 45,000 trust Identeefi
//           </Typography>
//         </CustomBox>

//         <Box>
//           <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} />
//           <Typography
//             variant="body2"
//             sx={{
//               color: "#7D8589",
//               fontSize: "16px",
//               fontWeight: "bold",
//               mt: 2,
//             }}
//           >
//             5-Star Rating (2k+ Reviews)
//           </Typography>
//         </Box>
//       </CustomContainer>

//       <Container sx={{ display: "flex", flexDirection: "column" }}>
//         <img src={logosImg} alt="logos" />
//       </Container>
//     </Box>
//   );
// };

// export default Companies;


// import { Box, Container, styled, Typography } from "@mui/material";
// import React from "react";
// import logoImg from "../../img/logo.png";
// import starsImg from "../../img/Star.png";
// import logosImg from "../../img/logos.png";

// const Companies = () => {
//   const CustomContainer = styled(Container)(({ theme }) => ({
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       alignItems: "center",
//       textAlign: "center",
//       marginBottom: theme.spacing(4),
//     },
//   }));

//   const CustomBox = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down("md")]: {
//       marginBottom: theme.spacing(4),
//     },
//   }));

//   return (
//     <Box sx={{ mt: 10 }}>
//       <CustomContainer>
//         <CustomBox>
//           <img src={logoImg} alt="MedAuthChain Logo" style={{ maxWidth: "100%" }} />
//           <Typography
//             variant="body2"
//             sx={{
//               color: "#7D8589",
//               fontSize: "16px",
//               fontWeight: "bold",
//               mt: 2,
//             }}
//           >
//             Trusted by leading pharmaceutical companies and healthcare providers
//           </Typography>
//         </CustomBox>

//         <Box>
//           <img src={starsImg} alt="Trust Rating" style={{ maxWidth: "100%" }} />
//           <Typography
//             variant="body2"
//             sx={{
//               color: "#7D8589",
//               fontSize: "16px",
//               fontWeight: "bold",
//               mt: 2,
//             }}
//           >
//             5-Star Reliability Rating (Verified by 2K+ Partners)
//           </Typography>
//         </Box>
//       </CustomContainer>

//       <Container
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 4,
//         }}
//       >
//         <Typography
//           sx={{
//             color: "#1C1C1D",
//             fontSize: "20px",
//             fontWeight: "600",
//             mb: 2,
//           }}
//         >
//           Partnered With
//         </Typography>

//         <img src={logosImg} alt="Partner Logos" style={{ maxWidth: "80%", opacity: 0.9 }} />
//         <Typography
//           variant="body2"
//           sx={{
//             color: "#7D8589",
//             fontSize: "15px",
//             mt: 1,
//             textAlign: "center",
//             maxWidth: "600px",
//           }}
//         >
//           Collaborating with trusted pharma manufacturers, distributors, and
//           healthcare organizations to ensure the authenticity of every medicine.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Companies;



import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../../img/MediAuthNet.png";
import starsImg from "../../img/Star.png";
import logosImg from "../../img/logos.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img
            src={logoImg}
            alt="MedAuthNet "
            style={{
              maxWidth: "220px",
              borderRadius: "10px",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Trusted by leading pharmaceutical companies and healthcare providers
          </Typography>
        </CustomBox>

        <Box>
          <img
            src={starsImg}
            alt="Trust Rating"
            style={{ maxWidth: "120px" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Reliability Rating (Verified by 2K+ Partners)
          </Typography>
        </Box>
      </CustomContainer>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            color: "#1C1C1D",
            fontSize: "20px",
            fontWeight: "600",
            mb: 2,
          }}
        >
          Partnered With
        </Typography>

        <img
          src={logosImg}
          alt="Partner Logos"
          style={{ maxWidth: "80%", opacity: 0.9 }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#7D8589",
            fontSize: "15px",
            mt: 1,
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Collaborating with trusted pharma manufacturers, distributors, and
          healthcare organizations to ensure the authenticity of every medicine.
        </Typography>
      </Container>
    </Box>
  );
};

export default Companies;
