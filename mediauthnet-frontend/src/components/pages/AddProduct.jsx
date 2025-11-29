// // import { Box, Paper, Typography } from '@mui/material';
// // import bgImg from '../../img/bg.png';
// // import { TextField, Button } from '@mui/material';
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import QRCode from 'qrcode.react';
// // import dayjs from 'dayjs';
// // import useAuth from '../../hooks/useAuth';
// // import { useNavigate } from 'react-router-dom';
// // import Geocode from "react-geocode";

// // const AddProduct = () => {

// //     const [serialNumber, setSerialNumber] = useState("");
// //     const [name, setName] = useState("");
// //     const [brand, setBrand] = useState("");
// //     const [description, setDescription] = useState("");
// //     const [image, setImage] = useState({
// //         file: [],
// //         filepreview: null
// //     });

// //     const [qrData, setQrData] = useState('');
// //     const [manuDate, setManuDate] = useState('');
// //     const [manuLatitude, setManuLatitude] = useState("");
// //     const [manuLongtitude, setManuLongtitude] = useState("");
// //     const [manuName, setManuName] = useState("");
// //     const [loading, setLoading] = useState("");
// //     const [manuLocation, setManuLocation] = useState("");
// //     const [isUnique, setIsUnique] = useState(true);

// //     const { auth } = useAuth();
// //     const navigate = useNavigate();

// //     console.log("🔥 AddProduct LOADED");  // Debug — confirms correct file is loading

// //     // Load user name + location
// //     useEffect(() => {
// //         getUsername();
// //         getCurrentTimeLocation();
// //     }, []);

// //     // Convert lat/long -> readable address
// //     useEffect(() => {
// //         if (!manuLatitude || !manuLongtitude) return;

// //         Geocode.setApiKey('AIzaSyB5MSbxR9Vuj1pPeGvexGvQ3wUel4znfYY');

// //         Geocode.fromLatLng(manuLatitude, manuLongtitude).then(
// //             (response) => {
// //                 const address = response.results[0].formatted_address;
// //                 setManuLocation(address.replace(/,/g, ';'));
// //             },
// //             (error) => {
// //                 console.error(error);
// //             }
// //         );

// //     }, [manuLatitude, manuLongtitude]);

// //     const generateQRCode = async (serialNumber) => {
// //         const data = `PRODUCT:${serialNumber}`;
// //         setQrData(data);
// //     };

// //     const downloadQR = () => {
// //         const canvas = document.getElementById("QRCode");
// //         const pngUrl = canvas
// //             .toDataURL("image/png")
// //             .replace("image/png", "image/octet-stream");

// //         let downloadLink = document.createElement("a");
// //         downloadLink.href = pngUrl;
// //         downloadLink.download = `${serialNumber}.png`;
// //         document.body.appendChild(downloadLink);
// //         downloadLink.click();
// //         document.body.removeChild(downloadLink);
// //     };

// //     const handleBack = () => {
// //         navigate(-1);
// //     };

// //     const handleImage = async (e) => {
// //         setImage({
// //             ...image,
// //             file: e.target.files[0],
// //             filepreview: URL.createObjectURL(e.target.files[0])
// //         });
// //     };

// //     const getUsername = async () => {
// //         const res = await axios.get(`http://localhost:5000/profile/${auth.user}`);
// //         setManuName(res?.data[0]?.name);
// //     };

// //     const uploadImage = async (image) => {
// //         const data = new FormData();
// //         data.append("image", image.file);

// //         axios.post("http://localhost:5000/upload/product", data, {
// //             headers: { "Content-Type": "multipart/form-data" }
// //         }).then(res => {
// //             console.log("Image upload:", res.data);
// //         });
// //     };

// //     const registerProductFL = async () => {
// //         try {
// //             const productData = {
// //                 serialNumber,
// //                 name,
// //                 brand,
// //                 description: description.replace(/,/g, ';'),
// //                 imageName: image.file.name,
// //                 manufacturer: manuName,
// //                 location: manuLocation,
// //                 date: manuDate
// //             };

// //             const res = await axios.post(
// //                 "http://localhost:5000/fl/register-product",
// //                 productData,
// //                 { headers: { "Content-Type": "application/json" } }
// //             );

// //             console.log("FL Product Registered:", res.data);
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };

// //     const addProductDB = async () => {
// //         const profileData = JSON.stringify({
// //             serialNumber,
// //             name,
// //             brand
// //         });

// //         const res = await axios.post(
// //             'http://localhost:5000/addproduct',
// //             profileData,
// //             { headers: { 'Content-Type': 'application/json' } }
// //         );

// //         console.log("DB Insert:", res.data);
// //     };

// //     const checkUnique = async () => {
// //         const res = await axios.get("http://localhost:5000/product/serialNumber");
// //         const existingSerials = res.data.map((p) => p.serialnumber);

// //         const isDuplicate = existingSerials.includes(serialNumber);
// //         setIsUnique(!isDuplicate);

// //         return !isDuplicate;
// //     };

// //     const getCurrentTimeLocation = () => {
// //         setManuDate(dayjs().unix());
// //         navigator.geolocation.getCurrentPosition((position) => {
// //             setManuLatitude(position.coords.latitude);
// //             setManuLongtitude(position.coords.longitude);
// //         });
// //     };

// //     // ******************************
// //     // FINAL SUBMIT HANDLER
// //     // ******************************
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const unique = await checkUnique();
// //         if (!unique) return;

// //         uploadImage(image);
// //         await addProductDB();

// //         setLoading("Training Federated Learning Model...");
// //         await registerProductFL();

// //         generateQRCode(serialNumber);

// //         setLoading("Product Registered Successfully!");
// //     };

// //     return (
// //         <Box sx={{
// //             backgroundImage: `url(${bgImg})`,
// //             minHeight: "80vh",
// //             position: 'absolute',
// //             left: 0,
// //             right: 0,
// //             top: 0,
// //             bottom: 0,
// //             backgroundSize: 'cover',
// //             zIndex: -2,
// //             overflowY: "scroll"
// //         }}>
// //             <Paper elevation={3} sx={{ width: "400px", margin: "auto", marginTop: "10%", marginBottom: "10%", padding: "3%", backgroundColor: "#e3eefc" }}>
// //                 <Typography
// //                     variant="h2"
// //                     sx={{
// //                         textAlign: "center",
// //                         marginBottom: "3%",
// //                         fontFamily: 'Gambetta',
// //                         fontWeight: "bold",
// //                         fontSize: "2.5rem"
// //                     }}
// //                 >
// //                     Add Product
// //                 </Typography>

// //                 <form onSubmit={handleSubmit}>
// //                     <TextField
// //                         fullWidth
// //                         error={!isUnique}
// //                         helperText={!isUnique ? "Serial Number already exists" : ""}
// //                         margin="normal"
// //                         label="Serial Number"
// //                         variant="outlined"
// //                         onChange={(e) => setSerialNumber(e.target.value)}
// //                         value={serialNumber}
// //                     />

// //                     <TextField
// //                         fullWidth
// //                         margin="normal"
// //                         label="Name"
// //                         variant="outlined"
// //                         onChange={(e) => setName(e.target.value)}
// //                         value={name}
// //                     />

// //                     <TextField
// //                         fullWidth
// //                         margin="normal"
// //                         label="Brand"
// //                         variant="outlined"
// //                         onChange={(e) => setBrand(e.target.value)}
// //                         value={brand}
// //                     />

// //                     <TextField
// //                         fullWidth
// //                         margin="normal"
// //                         label="Description"
// //                         variant="outlined"
// //                         multiline
// //                         minRows={2}
// //                         onChange={(e) => setDescription(e.target.value)}
// //                         value={description}
// //                     />

// //                     <Button variant="outlined" component="label" fullWidth sx={{ mt: 2, mb: 2 }}>
// //                         Upload Image
// //                         <input type="file" hidden onChange={handleImage} />
// //                     </Button>

// //                     {image.filepreview && (
// //                         <img src={image.filepreview} alt="preview" style={{ width: "100%", height: "100%" }} />
// //                     )}

// //                     {qrData !== "" && (
// //                         <div style={{ textAlign: "center", marginTop: "3%" }}>
// //                             <QRCode value={qrData} id="QRCode" />
// //                             <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={downloadQR}>
// //                                 Download
// //                             </Button>
// //                         </div>
// //                     )}

// //                     {loading && (
// //                         <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
// //                             {loading}
// //                         </Typography>
// //                     )}

// //                     <Button
// //                         variant="contained"
// //                         type="submit"
// //                         fullWidth
// //                         sx={{ mt: 2, backgroundColor: '#98b5d5', '&:hover': { backgroundColor: '#618dbd' } }}
// //                     >
// //                         Add Product
// //                     </Button>

// //                     <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
// //                         <Button onClick={handleBack} sx={{ mt: 3 }}>
// //                             Back
// //                         </Button>
// //                     </Box>
// //                 </form>
// //             </Paper>
// //         </Box>
// //     );
// // }

// // export default AddProduct;


// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   Button,
// //   Divider,
// // } from "@mui/material";
// // import bgImg from "../../img/bg.png";
// // import dayjs from "dayjs";
// // import axios from "axios";
// // import QRCode from "qrcode.react";
// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import useAuth from "../../hooks/useAuth";

// // const AddProduct = () => {
// //   const [serialNumber, setSerialNumber] = useState("");
// //   const [name, setName] = useState("");
// //   const [brand, setBrand] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [image, setImage] = useState({ file: null, preview: null });

// //   const [loading, setLoading] = useState("");
// //   const [qrData, setQrData] = useState("");
// //   const [isUnique, setIsUnique] = useState(true);

// //   const [manuDate, setManuDate] = useState("");
// //   const [manuName, setManuName] = useState("Unknown Manufacturer");
// //   const [manuLocation] = useState("Auto-detected location unavailable");

// //   const { auth } = useAuth();
// //   const navigate = useNavigate();

// //   // Load username + timestamp
// //   useEffect(() => {
// //     loadUserName();
// //     setManuDate(dayjs().unix());
// //   }, []);

// //   const loadUserName = async () => {
// //     try {
// //       if (!auth.user) return;
// //       const res = await axios.get(`http://localhost:5000/profile/${auth.user}`);
// //       if (res.data && res.data[0]) setManuName(res.data[0].name);
// //     } catch {
// //       setManuName("Unknown Manufacturer");
// //     }
// //   };

// //   const checkUnique = async () => {
// //     const res = await axios.get("http://localhost:5000/product/serialNumber");
// //     const existing = res.data.map((p) => p.serialnumber);
// //     const duplicate = existing.includes(serialNumber);
// //     setIsUnique(!duplicate);
// //     return !duplicate;
// //   };

// //   const uploadImage = async () => {
// //     if (!image.file) return;
// //     const data = new FormData();
// //     data.append("image", image.file);
// //     await axios.post("http://localhost:5000/upload/product", data);
// //   };

// //   const addProductDB = async () => {
// //     await axios.post("http://localhost:5000/addproduct", {
// //       serialNumber,
// //       name,
// //       brand,
// //     });
// //   };

// //   const registerProductFL = async () => {
// //     await axios.post("http://localhost:5000/fl/register-product", {
// //       serialNumber,
// //       name,
// //       brand,
// //       description,
// //       imageName: image.file?.name,
// //       manufacturer: manuName,
// //       location: manuLocation,
// //       date: manuDate,
// //     });
// //   };

// //   const generateQRCode = () => {
// //     setQrData(`PRODUCT:${serialNumber}`);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!(await checkUnique())) return;

// //     setLoading("Uploading image...");
// //     await uploadImage();

// //     setLoading("Saving to database...");
// //     await addProductDB();

// //     setLoading("Training Federated Learning model...");
// //     await registerProductFL();

// //     generateQRCode();
// //     setLoading("Product successfully registered!");
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         backgroundImage: `url(${bgImg})`,
// //         minHeight: "100vh",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         padding: "40px",
// //       }}
// //     >
// //       <Paper
// //         elevation={6}
// //         sx={{
// //           width: "450px",
// //           padding: "35px",
// //           borderRadius: "20px",
// //           backdropFilter: "blur(10px)",
// //           background: "rgba(255,255,255,0.8)",
// //         }}
// //       >
// //         <Typography
// //           variant="h4"
// //           sx={{
// //             fontWeight: "800",
// //             color: "#0F1B4C",
// //             textAlign: "center",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           Add New Medicine
// //         </Typography>

// //         <Typography
// //           variant="body1"
// //           sx={{
// //             textAlign: "center",
// //             color: "#555",
// //             marginBottom: "20px",
// //           }}
// //         >
// //           Provide accurate details to help the Federated Learning model detect
// //           genuine medicines.
// //         </Typography>

// //         <Divider sx={{ mb: 3 }} />

// //         <form onSubmit={handleSubmit}>
// //           <TextField
// //             fullWidth
// //             label="Serial Number"
// //             margin="normal"
// //             value={serialNumber}
// //             onChange={(e) => setSerialNumber(e.target.value)}
// //             error={!isUnique}
// //             helperText={!isUnique ? "Serial number already exists" : ""}
// //           />

// //           <TextField
// //             fullWidth
// //             label="Medicine Name"
// //             margin="normal"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />

// //           <TextField
// //             fullWidth
// //             label="Brand"
// //             margin="normal"
// //             value={brand}
// //             onChange={(e) => setBrand(e.target.value)}
// //           />

// //           <TextField
// //             fullWidth
// //             multiline
// //             minRows={3}
// //             label="Description"
// //             margin="normal"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //           />

// //           <Button
// //             variant="outlined"
// //             component="label"
// //             fullWidth
// //             sx={{ mt: 2, mb: 2 }}
// //           >
// //             Upload Image
// //             <input
// //               type="file"
// //               hidden
// //               onChange={(e) =>
// //                 setImage({
// //                   file: e.target.files[0],
// //                   preview: URL.createObjectURL(e.target.files[0]),
// //                 })
// //               }
// //             />
// //           </Button>

// //           {image.preview && (
// //             <img
// //               src={image.preview}
// //               alt="preview"
// //               style={{ width: "100%", borderRadius: "12px" }}
// //             />
// //           )}

// //           {qrData && (
// //             <Box sx={{ textAlign: "center", mt: 3 }}>
// //               <QRCode value={qrData} size={140} />
// //             </Box>
// //           )}

// //           {loading && (
// //             <Typography sx={{ textAlign: "center", mt: 2, color: "#0F1B4C" }}>
// //               {loading}
// //             </Typography>
// //           )}

// //           <Button
// //             fullWidth
// //             variant="contained"
// //             sx={{
// //               mt: 3,
// //               padding: "12px",
// //               fontSize: "1rem",
// //               backgroundColor: "#0F1B4C",
// //               "&:hover": { backgroundColor: "#132a73" },
// //               borderRadius: "10px",
// //             }}
// //             type="submit"
// //           >
// //             Submit Product
// //           </Button>

// //           <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
// //             Back
// //           </Button>
// //         </form>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default AddProduct;




// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Divider,
// } from "@mui/material";
// import bgImg from "../../img/bg.png";
// import dayjs from "dayjs";
// import axios from "axios";
// import QRCode from "qrcode.react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const AddProduct = () => {
//   const [serialNumber, setSerialNumber] = useState("");
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const [loading, setLoading] = useState("");
//   const [qrData, setQrData] = useState("");
//   const [isUnique, setIsUnique] = useState(true);

//   const [manuDate, setManuDate] = useState("");
//   const [manuName, setManuName] = useState("Unknown Manufacturer");
//   const [manuLocation] = useState("Auto-detected location unavailable");

//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadUserName();
//     setManuDate(dayjs().unix());
//   }, []);

//   const loadUserName = async () => {
//     try {
//       if (!auth.user) return;
//       const res = await axios.get(`http://localhost:5000/profile/${auth.user}`);
//       if (res.data && res.data[0]) setManuName(res.data[0].name);
//     } catch {
//       setManuName("Unknown Manufacturer");
//     }
//   };

//   // ✅ Check serial number duplicate
//   const checkUnique = async () => {
//     const res = await axios.get("http://localhost:5000/product/serialNumber");
//     const existing = res.data.map((p) => p.serialnumber);
//     const duplicate = existing.includes(serialNumber);
//     setIsUnique(!duplicate);
//     return !duplicate;
//   };

//   // ✅ MAIN SUBMIT HANDLER (fixed)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!(await checkUnique())) return;

//     if (!image) {
//       alert("Please upload an image");
//       return;
//     }

//     // 🔥 Create FormData
//     const formData = new FormData();
//     formData.append("serialNumber", serialNumber);
//     formData.append("name", name);
//     formData.append("brand", brand);
//     formData.append("description", description);
//     formData.append("image", image); // VERY IMPORTANT
//     formData.append("manufacturer", manuName);
//     formData.append("location", manuLocation);
//     formData.append("date", manuDate);

//     try {
//       setLoading("Uploading product...");

//       const res = await axios.post(
//         "http://localhost:5000/product/add",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setLoading("Product saved successfully!");

//       // Generate QR
//       setQrData(`PRODUCT:${serialNumber}`);
//     } catch (err) {
//       console.error(err);
//       setLoading("Error saving product");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${bgImg})`,
//         minHeight: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "40px",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           width: "450px",
//           padding: "35px",
//           borderRadius: "20px",
//           backdropFilter: "blur(10px)",
//           background: "rgba(255,255,255,0.8)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "800",
//             color: "#0F1B4C",
//             textAlign: "center",
//             marginBottom: "10px",
//           }}
//         >
//           Add New Medicine
//         </Typography>

//         <Divider sx={{ mb: 3 }} />

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Serial Number"
//             margin="normal"
//             value={serialNumber}
//             onChange={(e) => setSerialNumber(e.target.value)}
//             error={!isUnique}
//             helperText={!isUnique ? "Serial number already exists" : ""}
//           />

//           <TextField
//             fullWidth
//             label="Medicine Name"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Brand"
//             margin="normal"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           />

//           <TextField
//             fullWidth
//             multiline
//             minRows={3}
//             label="Description"
//             margin="normal"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           {/* UPLOAD IMAGE */}
//           <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
//             Upload Image
//             <input
//               type="file"
//               hidden
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </Button>

//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt="preview"
//               style={{ width: "100%", marginTop: "10px", borderRadius: "12px" }}
//             />
//           )}

//           {qrData && (
//             <Box sx={{ textAlign: "center", mt: 3 }}>
//               <QRCode value={qrData} size={140} />
//             </Box>
//           )}

//           {loading && (
//             <Typography sx={{ textAlign: "center", mt: 2, color: "#0F1B4C" }}>
//               {loading}
//             </Typography>
//           )}

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               padding: "12px",
//               fontSize: "1rem",
//               backgroundColor: "#0F1B4C",
//               "&:hover": { backgroundColor: "#132a73" },
//               borderRadius: "10px",
//             }}
//             type="submit"
//           >
//             Submit Product
//           </Button>

//           <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
//             Back
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default AddProduct;




// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Divider,
// } from "@mui/material";
// import bgImg from "../../img/bg.png";
// import dayjs from "dayjs";
// import axios from "axios";
// import QRCode from "qrcode.react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const AddProduct = () => {
//   const [serialNumber, setSerialNumber] = useState("");
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const [loading, setLoading] = useState("");
//   const [qrData, setQrData] = useState("");
//   const [isUnique, setIsUnique] = useState(true);

//   const { auth } = useAuth();
//   const navigate = useNavigate();
//   const [manuName, setManuName] = useState("Unknown Manufacturer");


//   // Load manufacturer name
//   useEffect(() => {
//     loadUserName();
//   }, []);

//   const loadUserName = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/profile/${auth.user}`);
//       if (res.data && res.data[0]) {
//         setManuName(res.data[0].name);
//       }
//     } catch {
//       setManuName("Unknown Manufacturer");
//     }
//   };

//   // -----------------------------
//   //  CHECK UNIQUE SERIAL NUMBER
//   // -----------------------------
//   const checkUnique = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/products/serial/${serialNumber}`
//       );

//       if (res.data.exists) {
//         setIsUnique(false);
//         return false;
//       }

//       setIsUnique(true);
//       return true;
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   };

//   // -----------------------------
//   //  MAIN SUBMIT HANDLER
//   // -----------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const unique = await checkUnique();
//     if (!unique) return;

//     if (!image) {
//       alert("Please upload an image first.");
//       return;
//     }

//     // Create form data
//     const formData = new FormData();
//     formData.append("serialNumber", serialNumber);
//     formData.append("name", name);
//     formData.append("brand", brand);
//     formData.append("description", description);
//     formData.append("image", image);

//     try {
//       setLoading("Saving product…");

//       const res = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${auth.token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setLoading("Product saved successfully!");

//       // Generate QR
//       setQrData(res.data.qrToken);
//     } catch (err) {
//       console.error(err);
//       setLoading("Error saving product");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${bgImg})`,
//         minHeight: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "40px",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           width: "450px",
//           padding: "35px",
//           borderRadius: "20px",
//           backdropFilter: "blur(10px)",
//           background: "rgba(255,255,255,0.85)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "700",
//             color: "#0F1B4C",
//             textAlign: "center",
//             mb: 2,
//           }}
//         >
//           Add Product
//         </Typography>

//         <Divider sx={{ mb: 3 }} />

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Serial Number"
//             margin="normal"
//             value={serialNumber}
//             onChange={(e) => setSerialNumber(e.target.value)}
//             error={!isUnique}
//             helperText={!isUnique ? "Serial number already exists!" : ""}
//           />

//           <TextField
//             fullWidth
//             label="Product Name"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Brand"
//             margin="normal"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Description"
//             margin="normal"
//             multiline
//             minRows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           {/* Image Upload */}
//           <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
//             Upload Image
//             <input
//               type="file"
//               hidden
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </Button>

//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt="preview"
//               style={{ width: "100%", marginTop: "15px", borderRadius: "10px" }}
//             />
//           )}

//           {/* Generated QR */}
//           {qrData && (
//             <Box sx={{ textAlign: "center", mt: 3 }}>
//               <QRCode value={qrData} size={150} />
//               <Typography sx={{ mt: 1 }}>QR Token: {qrData}</Typography>
//             </Box>
//           )}

//           {loading && (
//             <Typography sx={{ textAlign: "center", mt: 2 }}>
//               {loading}
//             </Typography>
//           )}

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               padding: "12px",
//               fontSize: "1rem",
//               backgroundColor: "#0F1B4C",
//               "&:hover": { backgroundColor: "#132a73" },
//             }}
//             type="submit"
//           >
//             Submit Product
//           </Button>

//           <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
//             Back
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default AddProduct;




import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import bgImg from "../../img/bg.png";
import QRCode from "qrcode.react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../api/axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [manufactureDate, setManufactureDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [metadata, setMetadata] = useState("");
  const [image, setImage] = useState(null);

  const [qrToken, setQrToken] = useState("");
  const [loading, setLoading] = useState("");
  const [isUnique, setIsUnique] = useState(true);

  const navigate = useNavigate();

  const checkUnique = async () => {
    try {
      const res = await api.get(`/products/serial/${serialNumber}`);

      if (res.data.exists) {
        setIsUnique(false);
        return false;
      }

      setIsUnique(true);
      return true;
    } catch (err) {
      console.error("Serial check error:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const unique = await checkUnique();
    if (!unique) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("serialNumber", serialNumber);
    formData.append("batchNumber", batchNumber);
    formData.append("manufactureDate", manufactureDate);
    formData.append("expiryDate", expiryDate);
    formData.append("metadata", metadata);
    formData.append("image", image);

    try {
      setLoading("Saving product...");

      const res = await api.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setQrToken(res.data.qrToken);
      setLoading("Product added successfully!");

    } catch (err) {
      console.error(err);
      setLoading("Error saving product");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <Paper
        elevation={6}
        sx={{ width: "450px", padding: "30px", borderRadius: "15px" }}
      >
        <Typography variant="h4" textAlign="center" mb={2}>
          Add Product
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" margin="normal" value={name}
            onChange={(e) => setName(e.target.value)} />

          <TextField fullWidth label="Serial Number" margin="normal"
            value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)}
            error={!isUnique} helperText={!isUnique ? "Already exists!" : ""} />

          <TextField fullWidth label="Batch Number" margin="normal"
            value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)} />

          <TextField fullWidth type="date" label="Manufacturing Date"
            margin="normal" InputLabelProps={{ shrink: true }}
            value={manufactureDate} onChange={(e) => setManufactureDate(e.target.value)} />

          <TextField fullWidth type="date" label="Expiry Date"
            margin="normal" InputLabelProps={{ shrink: true }}
            value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

          <TextField fullWidth multiline minRows={2}
            label="Metadata (optional)" margin="normal"
            value={metadata} onChange={(e) => setMetadata(e.target.value)} />

          {/* Upload image */}
          <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
            Upload Image
            <input type="file" hidden onChange={(e) => setImage(e.target.files[0])} />
          </Button>

          {image && (
            <img src={URL.createObjectURL(image)} alt="preview"
              style={{ width: "100%", marginTop: "15px", borderRadius: "10px" }} />
          )}

          {/* QR After save */}
          {qrToken && (
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <QRCode value={qrToken} size={150} />
              <Typography sx={{ mt: 1 }}>QR Token: {qrToken}</Typography>
            </Box>
          )}

          {loading && <Typography textAlign="center">{loading}</Typography>}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Submit
          </Button>

          <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
            Back
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddProduct;
