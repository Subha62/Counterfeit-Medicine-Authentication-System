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

// const Supplier = () => {

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
//                 <h1>Supplier</h1>

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
//     );
// }

// export default Supplier;





// import "../../css/Role.css";
// import { LinkButton } from "../LinkButton";
// import { Box, Button as Btn, Typography } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";

// const Supplier = () => {
//   return (
//     <div className="role-container">
//       <div className="role-container-box">

//         {/* Logout */}
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

//         {/* Title */}
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", color: "#0F1B4C", mb: 2 }}
//         >
//           Supplier Dashboard
//         </Typography>

//         {/* Description */}
//         <Typography
//           sx={{
//             mb: 4,
//             maxWidth: "550px",
//             color: "#4F5361",
//             textAlign: "center",
//             lineHeight: "1.6rem",
//           }}
//         >
//           As a Supplier, you are responsible for safely transporting medicines 
//           from manufacturers to retailers. You verify product authenticity using 
//           our Federated Learning system before dispatching or receiving shipments.
//         </Typography>

//         {/* Action Buttons */}
//         <Box sx={{ width: "100%", maxWidth: "450px" }}>

//           {/* Check Profile */}
//           <LinkButton
//             to="/profile"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <InventoryIcon style={{ marginRight: "8px" }} />
//             View Profile
//           </LinkButton>

//           {/* Verify Product (Scanner Page) */}
//           <LinkButton
//             to="/scanner"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <CameraAltIcon style={{ marginRight: "8px" }} />
//             Verify Product (Scan QR / Image)
//           </LinkButton>

//           {/* Update Shipment Status */}
//           <LinkButton
//             to="/update-shipment"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <LocalShippingIcon style={{ marginRight: "8px" }} />
//             Update Shipment Status
//           </LinkButton>

//           {/* Check Delivery Authenticity */}
//           <LinkButton
//             to="/received-products"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <CheckCircleIcon style={{ marginRight: "8px" }} />
//             View Received Medicines
//           </LinkButton>

//         </Box>

//       </div>
//     </div>
//   );
// };

// export default Supplier;




import "../../css/Role.css";
import { LinkButton } from "../LinkButton";
import { Box, Button as Btn, Typography, Paper } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Supplier = () => {
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
            right: 15,
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
          Supplier Dashboard
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "480px",
            margin: "0 auto",
            color: "#4F5361",
            mb: 4,
            lineHeight: "1.7rem",
            fontSize: "1rem",
          }}
        >
          As a Supplier, you ensure secure transportation of medicines from
          manufacturers to retailers. Our Federated Learning AI helps you verify
          authenticity before receiving or dispatching shipments.
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
          {/* Profile Button */}
          <LinkButton
            to="/profile"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <InventoryIcon style={{ marginRight: "10px" }} />
            View Profile
          </LinkButton>

          {/* Verify using Scanner */}
          <LinkButton
            to="/scanner"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <CameraAltIcon style={{ marginRight: "10px" }} />
            Verify Product (QR / Image)
          </LinkButton>

          {/* Shipment Status */}
          <LinkButton
            to="/update-shipment"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <LocalShippingIcon style={{ marginRight: "10px" }} />
            Update Shipment Status
          </LinkButton>

          {/* Received Medicines */}
          <LinkButton
            to="/received-products"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
            style={{ fontSize: "1rem" }}
          >
            <CheckCircleIcon style={{ marginRight: "10px" }} />
            View Received Medicines
          </LinkButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Supplier;
