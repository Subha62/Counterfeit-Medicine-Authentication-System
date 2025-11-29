// import { styled, Typography } from "@mui/material";
// import { Box, Container } from "@mui/system";
// import React from "react";

// import fbIcon from "../../img/fbicon.png";
// import twitterIcon from "../../img/twittericon.png";
// import linkedinIcon from "../../img/linkedinicon.png";

// const Footer = () => {
//   const CustomContainer = styled(Container)(({ theme }) => ({
//     display: "flex",
//     justifyContent: "space-around",
//     gap: theme.spacing(5),
//     [theme.breakpoints.down("sm")]: {
//       flexDirection: "column",
//       textAlign: "center",
//     },
//   }));

//   const IconBox = styled(Box)(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     [theme.breakpoints.down("sm")]: {
//       justifyContent: "center",
//     },
//   }));

//   const FooterLink = styled("span")(({ theme }) => ({
//     fontSize: "16px",
//     color: "#7A7A7E",
//     fontWeight: "300",
//     cursor: "pointer",
//     "&:hover": {
//       color: "#000",
//     },
//   }));

//   return (
//     <Box sx={{ py: 10 }}>
//       <CustomContainer>
//         <CustomContainer>
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Products
//             </Typography>

//             <FooterLink>Product Verification</FooterLink>
//             <br />
//             <FooterLink>Supply Chain Tracking</FooterLink>
//             <br />
//             <FooterLink>Anti-Counterfeiting</FooterLink>
//             <br />
//             <FooterLink>Smart Contracts</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Resources
//             </Typography>

//             <FooterLink>How It Works</FooterLink>
//             <br />
//             <FooterLink>Case Studies</FooterLink>
//             <br />
//             <FooterLink>Blog</FooterLink>
//             <br />
//             <FooterLink>Whitepaper</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Company
//             </Typography>

//             <FooterLink>About Us</FooterLink>
//             <br />
//             <FooterLink>Partnerships</FooterLink>
//             <br />
//             <FooterLink>Terms of Use</FooterLink>
//             <br />
//             <FooterLink>Privacy Policy</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Get in touch
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 color: "#7A7A7E",
//                 fontWeight: "500",
//                 mb: 2,
//               }}
//             >
//               Let us help you find the perfect solution for your needs. 
//             </Typography>

//             <IconBox>
//               <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
//               <img
//                 src={twitterIcon}
//                 alt="twitterIcon"
//                 style={{ cursor: "pointer" }}
//               />
//               <img
//                 src={linkedinIcon}
//                 alt="linkedinIcon"
//                 style={{ cursor: "pointer" }}
//               />
//             </IconBox>
//           </Box>
//         </CustomContainer>
//       </CustomContainer>
//     </Box>
//   );
// };

// export default Footer;




import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../../img/fbicon.png";
import twitterIcon from "../../img/twittericon.png";
import linkedinIcon from "../../img/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "400",
    cursor: "pointer",
    lineHeight: "2rem",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F7FA", mt: 8 }}>
      <CustomContainer>

        {/* Section 1 — Brand Info */}
        <Box sx={{ maxWidth: "260px" }}>
          <Typography
            sx={{ fontSize: "22px", color: "#0F1B4C", fontWeight: "700", mb: 2 }}
          >
            MediAuthNet
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#7A7A7E",
              fontWeight: "400",
              lineHeight: "1.8rem",
            }}
          >
            A Federated Learning powered medicine authentication platform that helps
            prevent counterfeit drugs while maintaining complete data privacy.
          </Typography>
        </Box>

        {/* Section 2 — Features */}
        <Box>
          <Typography
            sx={{ fontSize: "20px", color: "#0F1B4C", fontWeight: "700", mb: 2 }}
          >
            Features
          </Typography>

          <FooterLink>Medicine Image Verification</FooterLink><br />
          <FooterLink>Privacy-Preserving AI (FL)</FooterLink><br />
          <FooterLink>Real-Time Counterfeit Alerts</FooterLink><br />
          <FooterLink>Pharmacy & Manufacturer Dashboard</FooterLink>
        </Box>

        {/* Section 3 — Resources */}
        <Box>
          <Typography
            sx={{ fontSize: "20px", color: "#0F1B4C", fontWeight: "700", mb: 2 }}
          >
            Resources
          </Typography>

          <FooterLink>How Federated Learning Works</FooterLink><br />
          <FooterLink>Research Papers</FooterLink><br />
          <FooterLink>Developer Docs</FooterLink><br />
          <FooterLink>Privacy Policy</FooterLink>
        </Box>

        {/* Section 4 — Contact */}
        <Box sx={{ maxWidth: "260px" }}>
          <Typography
            sx={{ fontSize: "20px", color: "#0F1B4C", fontWeight: "700", mb: 2 }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#7A7A7E",
              lineHeight: "1.8rem",
              mb: 2,
            }}
          >
            Have questions or need support?  
            Our team is here to help you verify and authenticate medicines.
          </Typography>

          <IconBox>
            <img src={fbIcon} alt="Facebook" style={{ cursor: "pointer", width: 30 }} />
            <img src={twitterIcon} alt="Twitter" style={{ cursor: "pointer", width: 30 }} />
            <img src={linkedinIcon} alt="LinkedIn" style={{ cursor: "pointer", width: 30 }} />
          </IconBox>
        </Box>

      </CustomContainer>

      {/* Bottom line */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 6,
          fontSize: "14px",
          color: "#7A7A7E",
        }}
      >
        © {new Date().getFullYear()} MediAuthNet — All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
