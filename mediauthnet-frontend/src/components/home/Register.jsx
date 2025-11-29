// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Container,
//   MenuItem,
// } from "@mui/material";
// import bgImg from "../../img/bg.png";

// const REGISTER_URL = "/auth/register";

// export default function Register() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [role, setRole] = useState("user");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState("");

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     await api.post(
//   //       REGISTER_URL,
//   //       JSON.stringify({ name, email, password: pwd, role }),
//   //       { headers: { "Content-Type": "application/json" } }
//   //     );

//   //     setSuccess("Registration Successful!");
//   //     setErrMsg("");
//   //     setTimeout(() => navigate("/login"), 1500);
//   //   } catch (err) {
//   //     if (err.response?.status === 400) {
//   //       setErrMsg("Email already registered");
//   //     } else {
//   //       setErrMsg("Registration failed. Try again.");
//   //     }
//   //   }
//   // };



//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await api.post(
//       REGISTER_URL,
//       JSON.stringify({ name, email, password: pwd, role }),
//       { headers: { "Content-Type": "application/json" } }
//     );

//     // Show success message
//     setSuccess("OTP sent to your email. Please verify.");
//     setErrMsg("");

//     // ⭐ Redirect to OTP page with email
//     navigate("/verify-otp", { state: { email } });

//   } catch (err) {
//     if (err.response?.status === 400) {
//       setErrMsg("Email already registered");
//     } else {
//       setErrMsg("Registration failed. Try again.");
//     }
//   }
// };


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
//         position: "relative",
//       }}
//     >
//       {/* Background Overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0,0,0,0.3)",
//           backdropFilter: "blur(2px)",
//         }}
//       />

//       <Container
//         maxWidth="sm"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <Box
//           sx={{
//             px: 4,
//             py: 5,
//             borderRadius: 3,
//             backgroundColor: "rgba(255,255,255,0.95)",
//             boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//             backdropFilter: "blur(5px)",
//           }}
//         >
//           <Typography
//             variant="h4"
//             textAlign="center"
//             fontWeight="bold"
//             sx={{ mb: 3 }}
//           >
//             Register
//           </Typography>

//           {errMsg && (
//             <Typography color="error" textAlign="center" sx={{ mb: 2 }}>
//               {errMsg}
//             </Typography>
//           )}

//           {success && (
//             <Typography color="green" textAlign="center" sx={{ mb: 2 }}>
//               {success}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleSubmit}>
//             <TextField
//               label="Full Name"
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 2 }}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <TextField
//               label="Email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 3 }}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 3 }}
//               onChange={(e) => setPwd(e.target.value)}
//             />

//             <TextField
//               label="Select Role"
//               select
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 3 }}
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <MenuItem value="user">User</MenuItem>
//               <MenuItem value="manufacturer">Manufacturer</MenuItem>
//               <MenuItem value="retailer">Retailer</MenuItem>
//               <MenuItem value="supplier">Supplier</MenuItem>
//               <MenuItem value="admin">Admin</MenuItem>
//             </TextField>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 4,
//                 py: 1.3,
//                 fontSize: "1rem",
//                 fontWeight: "bold",
//                 backgroundColor: "#1976d2",
//                 "&:hover": { backgroundColor: "#125aa0" },
//               }}
//             >
//               REGISTER
//             </Button>

//             <Button
//               onClick={() => navigate("/login")}
//               fullWidth
//               sx={{
//                 mt: 2,
//                 color: "#1976d2",
//                 textTransform: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               ALREADY HAVE AN ACCOUNT? LOGIN
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import bgImg from "../../img/bg.png";

const REGISTER_URL = "/auth/register";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [role, setRole] = useState("user");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        REGISTER_URL,
        JSON.stringify({ name, email, password: pwd, role }),
        { headers: { "Content-Type": "application/json" } }
      );

      // Success message
      setSuccess("OTP sent to your email. Please verify.");
      setErrMsg("");

      // ⭐ Redirect to OTP page and send Email
      navigate("/verify-otp", { state: { email: email } });

    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsg("Email already registered");
      } else {
        setErrMsg("Registration failed. Try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(2px)",
        }}
      />

      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            px: 4,
            py: 5,
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.95)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(5px)",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Register
          </Typography>

          {errMsg && (
            <Typography color="error" textAlign="center" sx={{ mb: 2 }}>
              {errMsg}
            </Typography>
          )}

          {success && (
            <Typography color="green" textAlign="center" sx={{ mb: 2 }}>
              {success}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ mt: 3 }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              sx={{ mt: 3 }}
              onChange={(e) => setPwd(e.target.value)}
            />

            <TextField
              label="Select Role"
              select
              fullWidth
              variant="outlined"
              sx={{ mt: 3 }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="manufacturer">Manufacturer</MenuItem>
              <MenuItem value="retailer">Retailer</MenuItem>
              <MenuItem value="supplier">Supplier</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                py: 1.3,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#125aa0" },
              }}
            >
              REGISTER
            </Button>

            <Button
              onClick={() => navigate("/login")}
              fullWidth
              sx={{
                mt: 2,
                color: "#1976d2",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              ALREADY HAVE AN ACCOUNT? LOGIN
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
