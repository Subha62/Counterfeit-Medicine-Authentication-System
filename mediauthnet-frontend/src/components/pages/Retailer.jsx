// import '../../css/Role.css'
// import { Button } from '../Button';
// import { Link } from 'react-router-dom';
// import { Box, Button as Btn } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useState, useEffect } from 'react';


// const getEthereumObject = () => window.ethereum;

// const findMetaMaskAccount = async () => {
//     try {
//         const ethereum = getEthereumObject();

//         /*
//          * First make sure we have access to the Ethereum object.
//          */
//         if (!ethereum) {
//             console.error("Make sure you have Metamask!");
//             return null;
//         }

//         console.log("We have the Ethereum object", ethereum);
//         const accounts = await ethereum.request({ method: "eth_accounts" });

//         if (accounts.length !== 0) {
//             const account = accounts[0];
//             console.log("Found an authorized account:", account);
//             return account;
//         } else {
//             console.error("No authorized account found");
//             return null;
//         }
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

// const Retailer = () => {

//     const [currentAccount, setCurrentAccount] = useState("");

//     useEffect(() => {
//         findMetaMaskAccount().then((account) => {
//             if (account !== null) {
//                 setCurrentAccount(account);
//             }
//         });
//     }, []);

//     const connectWallet = async () => {
//         try {
//             const ethereum = getEthereumObject();
//             if (!ethereum) {
//                 alert("Get MetaMask!");
//                 return;
//             }

//             const accounts = await ethereum.request({
//                 method: "eth_requestAccounts",
//             });

//             console.log("Connected", accounts[0]);
//             setCurrentAccount(accounts[0]);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return ( 
//         <div className="role-container">
//             <div className="role-container-box">
//                 <Box
//                     sx={{                        
//                         position: 'absolute',
//                         top: 20,
//                         right: 20,
//                     }}
//                 >
//                     <Btn href="/login" endIcon={<LogoutIcon />}>Logout</Btn>                    
//                 </Box>

//                 <h2>Welcome:</h2>
//                 <h1>Retailer</h1>

//                 <Link to="/profile">
//                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>
//                 </Link>

//                 <Link to="/scanner">
//                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Update Product</Button>
//                 </Link>

//                 {!currentAccount && (
//                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large' onClick={connectWallet}>Connect Wallet</Button>
//                 )}

//             </div>
//         </div>
//      );
// }
 
// export default Retailer;



// import "../../css/Role.css";
// import { LinkButton } from "../LinkButton";
// import { Box, Button as Btn, Typography } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import StoreIcon from "@mui/icons-material/Store";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const Retailer = () => {
//   return (
//     <div className="role-container">
//       <div className="role-container-box">

//         {/* Logout Button */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 20,
//             right: 20,
//           }}
//         >
//           <Btn
//             href="/login"
//             variant="contained"
//             color="error"
//             endIcon={<LogoutIcon />}
//             sx={{ fontWeight: 600 }}
//           >
//             Logout
//           </Btn>
//         </Box>

//         {/* Header */}
//         <Typography
//           variant="h4"
//           sx={{ color: "#0F1B4C", fontWeight: "bold", mb: 2 }}
//         >
//           Retailer Dashboard
//         </Typography>

//         {/* Description */}
//         <Typography
//           sx={{
//             maxWidth: "550px",
//             textAlign: "center",
//             color: "#4F5361",
//             mb: 4,
//             lineHeight: "1.6rem",
//           }}
//         >
//           As a Retailer, your main responsibility is to verify every medicine 
//           received from suppliers before selling it. Our Federated Learning model 
//           ensures you can instantly detect counterfeit medicines from product images
//           or QR scans.
//         </Typography>

//         {/* Buttons */}
//         <Box sx={{ width: "100%", maxWidth: "450px" }}>

//           {/* Profile */}
//           <LinkButton
//             to="/profile"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <StoreIcon style={{ marginRight: "8px" }} />
//             View Profile
//           </LinkButton>

//           {/* Verify using Scanner */}
//           <LinkButton
//             to="/scanner"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <CameraAltIcon style={{ marginRight: "8px" }} />
//             Verify Medicine (Scan / Upload)
//           </LinkButton>

//           {/* View all incoming products */}
//           <LinkButton
//             to="/incoming-products"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <InventoryIcon style={{ marginRight: "8px" }} />
//             Incoming Shipments
//           </LinkButton>

//           {/* Check authenticity results */}
//           <LinkButton
//             to="/verification-history"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <CheckCircleIcon style={{ marginRight: "8px" }} />
//             Verification History
//           </LinkButton>

//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Retailer;




import "../../css/Role.css";
import { LinkButton } from "../LinkButton";
import { Box, Button as Btn, Typography, Paper } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import StoreIcon from "@mui/icons-material/Store";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Retailer = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f0fe 0%, #d4e1ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "520px",
          padding: "40px 35px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Logout Button */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 10,
          }}
        >
          <Btn
            href="/login"
            variant="contained"
            color="error"
            endIcon={<LogoutIcon />}
            sx={{
              fontWeight: 700,
              borderRadius: "10px",
              padding: "6px 14px",
            }}
          >
            Logout
          </Btn>
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            color: "#0F1B4C",
            mb: 1,
            fontSize: "2rem",
          }}
        >
          Retailer Dashboard
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#4F5361",
            mb: 4,
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: "1.7rem",
            fontSize: "1rem",
          }}
        >
          Your responsibility is to verify all incoming medicines from
          suppliers. Using our Federated Learning AI model, you can quickly
          detect counterfeit medicines via QR scans or image uploads.
        </Typography>

        {/* Buttons Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
          }}
        >
          <LinkButton
            to="/profile"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <StoreIcon style={{ marginRight: "10px" }} />
            View Profile
          </LinkButton>

          <LinkButton
            to="/scanner"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <CameraAltIcon style={{ marginRight: "10px" }} />
            Verify Medicine (Scan / Upload)
          </LinkButton>

          <LinkButton
            to="/incoming-products"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <InventoryIcon style={{ marginRight: "10px" }} />
            Incoming Shipments
          </LinkButton>

          <LinkButton
            to="/verification-history"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <CheckCircleIcon style={{ marginRight: "10px" }} />
            Verification History
          </LinkButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Retailer;
