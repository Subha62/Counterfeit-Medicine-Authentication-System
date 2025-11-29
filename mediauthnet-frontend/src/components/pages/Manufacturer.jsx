// // import '../../css/Role.css'
// // import { Button } from '../Button';
// // import { Link } from 'react-router-dom';
// // import { useState, useEffect } from 'react';
// // import { Box, Button as Btn } from '@mui/material';
// // import LogoutIcon from '@mui/icons-material/Logout';

// // const getEthereumObject = () => window.ethereum;

// // const findMetaMaskAccount = async () => {
// //     try {
// //         const ethereum = getEthereumObject();

// //         /*
// //          * First make sure we have access to the Ethereum object.
// //          */
// //         if (!ethereum) {
// //             console.error("Make sure you have Metamask!");
// //             return null;
// //         }

// //         console.log("We have the Ethereum object", ethereum);
// //         const accounts = await ethereum.request({ method: "eth_accounts" });

// //         if (accounts.length !== 0) {
// //             const account = accounts[0];
// //             console.log("Found an authorized account:", account);
// //             return account;
// //         } else {
// //             console.error("No authorized account found");
// //             return null;
// //         }
// //     } catch (error) {
// //         console.error(error);
// //         return null;
// //     }
// // };

// // const Manufacturer = () => {

// //     const [currentAccount, setCurrentAccount] = useState("");

// //     useEffect(() => {
// //         findMetaMaskAccount().then((account) => {
// //             if (account !== null) {
// //                 setCurrentAccount(account);
// //             }
// //         });
// //     }, []);

// //     const connectWallet = async () => {
// //         try {
// //             const ethereum = getEthereumObject();
// //             if (!ethereum) {
// //                 alert("Get MetaMask!");
// //                 return;
// //             }

// //             const accounts = await ethereum.request({
// //                 method: "eth_requestAccounts",
// //             });

// //             console.log("Connected", accounts[0]);
// //             setCurrentAccount(accounts[0]);
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

    

// //     return (
// //         <div className="role-container">
// //             <div className="role-container-box">
// //                 <Box
// //                     sx={{                        
// //                         position: 'absolute',
// //                         top: 20,
// //                         right: 20,
// //                     }}
// //                 >
// //                     <Btn href="/login" endIcon={<LogoutIcon />}>Logout</Btn>                    
// //                 </Box>

// //                 <h2>Welcome:</h2>
// //                 <h1>Manufacturer</h1>
                
// //                 <Link to="/profile">
// //                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>
// //                 </Link>

// //                 <Link to="/add-product">
// //                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Add Product</Button>
// //                 </Link>

// //                 {/*
// //                  * If there is no currentAccount render this button
// //                 */}
// //                 {!currentAccount && (
// //                     <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large' onClick={connectWallet}>Connect Wallet</Button>
// //                 )}

// //             </div>
// //         </div>
// //     );
// // }

// // export default Manufacturer;



// import "../../css/Role.css";
// import { LinkButton } from "../LinkButton";
// import { Box, Button as Btn, Typography } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import ImageIcon from "@mui/icons-material/Image";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FolderIcon from "@mui/icons-material/Folder";

// const Manufacturer = () => {
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

//         {/* Title */}
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", mb: 2, color: "#0F1B4C" }}
//         >
//           Manufacturer Dashboard
//         </Typography>

//         {/* Description */}
//         <Typography
//           variant="body1"
//           sx={{
//             mb: 4,
//             maxWidth: "550px",
//             color: "#4F5361",
//             textAlign: "center",
//             lineHeight: "1.6rem",
//           }}
//         >
//           You are responsible for adding authentic medicine data to the system.
//           Your packaging images are used to train our Federated Learning model
//           to recognize genuine medicines with high accuracy.
//         </Typography>

//         {/* Manufacturer Action Buttons */}
//         <Box sx={{ width: "100%", maxWidth: "450px" }}>
          
//           {/* Profile */}
//           <LinkButton
//             to="/profile"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <AccountCircleIcon style={{ marginRight: "8px" }} />
//             View Profile
//           </LinkButton>

//           {/* Add Product */}
//           <LinkButton
//             to="/add-product"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <AddBoxIcon style={{ marginRight: "8px" }} />
//             Add New Medicine
//           </LinkButton>

//           {/* Upload Images for FL Training */}
//           <LinkButton
//             to="/upload-training-images"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <ImageIcon style={{ marginRight: "8px" }} />
//             Upload Packaging Images (FL Training)
//           </LinkButton>

//           {/* View Uploaded Dataset */}
//           <LinkButton
//             to="/manufacturer-dataset"
//             className="btns"
//             buttonStyle="btn--long"
//             buttonSize="btn--large"
//           >
//             <FolderIcon style={{ marginRight: "8px" }} />
//             View My Dataset
//           </LinkButton>

//         </Box>

//       </div>
//     </div>
//   );
// };

// export default Manufacturer;





import "../../css/Role.css";
import { LinkButton } from "../LinkButton";
import { Box, Button as Btn, Typography, Paper } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ImageIcon from "@mui/icons-material/Image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";

const Manufacturer = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "450px",
          padding: "35px 30px",
          backgroundColor: "#e8f0fe",
          borderRadius: "16px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Logout Button */}
        <Box
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
          }}
        >
          <Btn
            href="/login"
            variant="contained"
            color="error"
            endIcon={<LogoutIcon />}
            sx={{
              fontWeight: 600,
              padding: "4px 10px",
              fontSize: "0.75rem",
              minWidth: "90px",
            }}
          >
            Logout
          </Btn>
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "800",
            color: "#0F1B4C",
            mb: 1,
          }}
        >
          Manufacturer
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#0F1B4C",
            mb: 3,
          }}
        >
          Dashboard
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: "500px",
            color: "#4F5361",
            textAlign: "center",
            lineHeight: "1.6rem",
            margin: "0 auto",
          }}
        >
          You are responsible for adding authentic medicine data to the system.
          Your packaging images help train the Federated Learning model to
          recognize genuine medicines with high accuracy.
        </Typography>

        {/* Buttons */}
        <Box sx={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
          <LinkButton
            to="/profile"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
          >
            <AccountCircleIcon style={{ marginRight: "8px" }} />
            View Profile
          </LinkButton>

          <LinkButton
            to="/add-product"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
          >
            <AddBoxIcon style={{ marginRight: "8px" }} />
            Add New Medicine
          </LinkButton>

          <LinkButton
            to="/upload-training-images"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
          >
            <ImageIcon style={{ marginRight: "8px" }} />
            Upload Packaging Images (FL Training)
          </LinkButton>

          <LinkButton
            to="/manufacturer-dataset"
            className="btns"
            buttonStyle="btn--long"
            buttonSize="btn--large"
          >
            <FolderIcon style={{ marginRight: "8px" }} />
            View My Dataset
          </LinkButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Manufacturer;

