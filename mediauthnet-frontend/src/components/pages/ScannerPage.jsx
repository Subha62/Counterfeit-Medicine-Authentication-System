// import { Box, Paper, Avatar, Typography, Button } from '@mui/material';
// import bgImg from '../../img/bg.png';
// import QrScanner from '../QrScanner';
// import { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ScannerPage = () => {
//     const CONTRACT_ADDRESS  = '0x62081f016446585cCC507528cc785980296b4Ccd';
//     const [qrData, setQrData] = useState('');

//     const { auth } = useAuth();
//     const navigate = useNavigate();
    
//     const passData = (data) => {
//         setQrData(data);
//         console.log("qrdata 1: ", qrData);
//       };

//     useEffect(() => {
//         console.log("auth: ", auth);
//         console.log("qrdata 2: ", qrData);

//         const arr = qrData.split(",");
//         const contractAddress = arr[0];

//         if(contractAddress){
//             if (contractAddress == CONTRACT_ADDRESS) {
//                 if (auth.role === "supplier" || auth.role === "retailer") {
//                     navRole();
//                 } else {
//                     navUser();
//                 }
//             } 
            
//             else {
//                 navFakeProduct();
//             }

//         }


//     }, [qrData]);

//     const navRole = () => {
//         navigate('/update-product', { state: { qrData }});

//     }

//     const navUser = () => {
//         navigate('/authentic-product', { state: { qrData }});
//     }

//     const navFakeProduct = () => {
//         navigate('/fake-product');
//     }

//     const handleBack = () => {
//         navigate(-1)
//     }

//     return (

//         <Box sx={{
//             backgroundImage: `url(${bgImg})`,
//             minHeight: "80vh",
//             backgroundRepeat: "no-repeat",
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             zIndex: -2,
//             overflowY: "scroll"
//         }}>
//             <Paper elevation={3} sx={{ width: "400px", margin: "auto", marginTop: "10%", marginBottom: "10%", padding: "3%", backgroundColor: "#e3eefc" }}>

//                 <Box
//                     sx={{
//                         textAlign: "center", marginBottom: "5%",
//                     }}
//                 >

//                     <Typography
//                         variant="h2"
//                         sx={{
//                             textAlign: "center", marginBottom: "3%",
//                             fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
//                         }}
//                     >
//                         Scan QR Code</Typography>

//                     <QrScanner passData={passData}/>

//                     <Box
//                         sx={{
//                             width: "100%",
//                             display: "flex",
//                             justifyContent: "center",
//                         }}
//                     >


//                         <Button
//                             onClick={handleBack}
//                             sx={{
//                                 marginTop: "5%",
//                             }}
//                         >
//                             Back
//                         </Button>

//                     </Box>    


//                 </Box>
//             </Paper>
//         </Box>
//     )
// }

// export default ScannerPage;



// import { Box, Paper, Typography, Button } from '@mui/material';
// import bgImg from '../../img/bg.png';
// import QrScanner from '../QrScanner';
// import { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

// const ScannerPage = () => {
//     const CONTRACT_ADDRESS = '0x62081f016446585cCC507528cc785980296b4Ccd';
//     const [qrData, setQrData] = useState('');

//     const { auth } = useAuth();
//     const navigate = useNavigate();

//     const passData = (data) => {
//         setQrData(data);
//     };

//     useEffect(() => {
//         const arr = qrData.split(",");
//         const contractAddress = arr[0];

//         if (!contractAddress) return;

//         if (contractAddress === CONTRACT_ADDRESS) {
//             if (auth.role === "supplier" || auth.role === "retailer") {
//                 navigate('/update-product', { state: { qrData } });
//             } else {
//                 navigate('/authentic-product', { state: { qrData } });
//             }
//         } else {
//             navigate('/fake-product');
//         }

//     }, [qrData]);

//     const handleBack = () => {
//         navigate(-1);
//     };

//     return (
//         <Box
//             sx={{
//                 backgroundImage: `url(${bgImg})`,
//                 minHeight: "100vh",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 paddingTop: "50px"
//             }}
//         >
//             <Paper
//                 elevation={3}
//                 sx={{
//                     width: "400px",
//                     margin: "auto",
//                     padding: "25px",
//                     backgroundColor: "#e3eefc",
//                     borderRadius: "10px"
//                 }}
//             >
//                 <Typography
//                     variant="h4"
//                     sx={{
//                         textAlign: "center",
//                         fontWeight: "bold",
//                         marginBottom: "20px"
//                     }}
//                 >
//                     Scan QR Code
//                 </Typography>

//                 <QrScanner passData={passData} />

//                 <Box sx={{ textAlign: "center" }}>
//                     <Button onClick={handleBack} sx={{ marginTop: "20px" }}>
//                         Back
//                     </Button>
//                 </Box>
//             </Paper>
//         </Box>
//     );
// };

// export default ScannerPage;




import { Box, Paper, Typography, Button } from '@mui/material';
import bgImg from '../../img/bg.png';
import QrScanner from '../QrScanner';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import api from "../../api/axios";

const ScannerPage = () => {
    const [qrData, setQrData] = useState("");
    const { auth } = useAuth();
    const navigate = useNavigate();

    const passData = (data) => {
        setQrData(data);
    };

    useEffect(() => {
        if (!qrData) return;

        const verifyProduct = async () => {
            try {
                // 🔥 Call backend API
                const res = await api.get(`/products/verify/${qrData}`);

                if (res.data.verified === true) {
                    // Product is real
                    if (auth.role === "supplier" || auth.role === "retailer") {
                        navigate("/update-product", { state: { product: res.data.product } });
                    } else {
                        navigate("/authentic-product", { state: { product: res.data.product } });
                    }
                } else {
                    navigate("/fake-product");
                }

            } catch (err) {
                console.log(err);
                navigate("/fake-product");
            }
        };

        verifyProduct();

    }, [qrData, auth.role, navigate]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImg})`,
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                paddingTop: "50px"
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: "400px",
                    margin: "auto",
                    padding: "25px",
                    backgroundColor: "#e3eefc",
                    borderRadius: "10px"
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "20px"
                    }}
                >
                    Scan QR Code
                </Typography>

                <QrScanner passData={passData} />

                <Box sx={{ textAlign: "center" }}>
                    <Button onClick={handleBack} sx={{ marginTop: "20px" }}>
                        Back
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ScannerPage;
