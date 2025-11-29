// // import Button from "@mui/material/Button";
// // import TextField from "@mui/material/TextField";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import Checkbox from "@mui/material/Checkbox";
// // import Box from "@mui/material/Box";
// // import Typography from "@mui/material/Typography";
// // import Container from "@mui/material/Container";
// // import bgImg from "../../img/bg.png";
// // import axios from '../../api/axios';
// // import useAuth from '../../hooks/useAuth';
// // import { useRef, useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';


// // const LOGIN_URL = '/auth';

// // export default function Login() {
// //     const { setAuth } = useAuth();
// //     const navigate = useNavigate();

// //     const errRef = useRef();

// //     const [user, setUser] = useState('');
// //     const [pwd, setPwd] = useState('');
// //     const [errMsg, setErrMsg] = useState('');

// //     const handleBack = () => {
// //         navigate('/');
// //     }

// //     useEffect(() => {
// //         setErrMsg('');
// //     }, [user, pwd]);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         console.log('user: ', user);
// //         console.log('pwd: ', pwd);

// //         try {
// //             const res = await axios.post(`${LOGIN_URL}/${user}/${pwd}`,
// //                 {
// //                     headers: { 'Content-Type': 'application/json' },
// //                 });

// //             console.log(res?.data[0])

// //             if (res?.data.length === 0) {
// //                 setErrMsg('Login Failed. Please try again later.');
// //                 // errRef.current.focus();
// //             } else {
// //                 const role = res?.data[0].role;
// //                 setAuth({ user, pwd, role })
// //                 setUser('');
// //                 setPwd('');
// //                 navigate(`/${role}`, { replace: true });

// //             }
// //         } catch (err) {
// //             if (!err?.response) {
// //                 setErrMsg('Server is down. Please try again later.');
// //             } else if (err.response?.status === 400) {
// //                 setErrMsg('Invalid username or password.');
// //             } else if (err.response?.status === 401) {
// //                 setErrMsg('Unauthorized access.');
// //             } else {
// //                 setErrMsg('Login Failed. Please try again later.');
// //             }
// //             errRef.current.focus();
// //         }
// //     };

// //     return (
// //         <Box sx={{
// //             backgroundImage: `url(${bgImg})`,
// //             minHeight: "80vh",
// //             backgroundRepeat: "no-repeat",
// //             position: 'absolute',
// //             left: 0,
// //             right: 0,
// //             top: 0,
// //             bottom: 0,
// //             backgroundSize: 'cover',
// //             backgroundRepeat: 'no-repeat',
// //             zIndex: -2,
// //         }}>

// //             <Container component="main" maxWidth="sm">
// //                 <Box
// //                     sx={{
// //                         boxShadow: 3,
// //                         borderRadius: 2,
// //                         px: 4,
// //                         py: 6,
// //                         marginTop: 8,
// //                         backgroundColor: '#e3eefc',
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         alignItems: "center",
// //                         align: "center",

// //                     }}
// //                 >
// //                     <Typography component="h1" variant="h5"
// //                         sx={{
// //                             textAlign: "center", marginBottom: "3%", marginTop: "3%",
// //                             fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
// //                         }}
// //                     >
// //                        MediAuthNet
// //                     </Typography>
// //                     <Typography component="h1" variant="h5">
// //                         Login
// //                     </Typography>
// //                     {errMsg && <Typography component="h1" variant="body2" color="error" ref={errRef} sx={{marginTop: "2rem"}}>  {errMsg} </Typography>}
// //                     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
// //                         <TextField
// //                             margin="normal"
// //                             required
// //                             fullWidth
// //                             id="username"
// //                             label="Username"
// //                             name="username"
// //                             autoFocus
// //                             onChange={(e) => setUser(e.target.value)}

// //                         />
// //                         <TextField
// //                             margin="normal"
// //                             required
// //                             fullWidth
// //                             name="password"
// //                             label="Password"
// //                             type="password"
// //                             id="password"
// //                             onChange={(e) => setPwd(e.target.value)}
// //                         />
// //                         <FormControlLabel
// //                             control={<Checkbox value="remember" color="primary" />}
// //                             label="Remember me"
// //                         />
// //                         <Button
// //                             type="submit"
// //                             fullWidth
// //                             variant="contained"
// //                             sx={{ mt: 3, mb: 2 }}
// //                         >
// //                             Login
// //                         </Button>
// //                         <Box
// //                             sx={{
// //                                 width: "100%",
// //                                 display: "flex",
// //                                 justifyContent: "center",
// //                             }}
// //                         >


// //                             <Button
// //                                 onClick={handleBack}

// //                             >
// //                                 Back
// //                             </Button>

// //                         </Box>
// //                     </Box>
// //                 </Box>
// //             </Container>
// //         </Box>
// //     );
// // }





// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// import bgImg from "../../img/bg.png";
// import api from "../../api/axios";
// import useAuth from "../../hooks/useAuth";

// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const LOGIN_URL = "/auth/login";

// export default function Login() {
//   const { setAuth } = useAuth();
//   const navigate = useNavigate();

//   const errRef = useRef(null);

//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   useEffect(() => {
//     setErrMsg("");
//   }, [email, pwd]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await api.post(
//   //       LOGIN_URL,
//   //       { email, password: pwd },
//   //       { headers: { "Content-Type": "application/json" } }
//   //     );

//   //     const token = response?.data?.token;
//   //     const user = response?.data?.user;

//   //     if (!token || !user) {
//   //       setErrMsg("Invalid email or password.");
//   //       return;
//   //     }

//   //     // Save login info globally
//   //     setAuth({ email, role: user.role, token });

//   //     // Save to localStorage
//   //     localStorage.setItem(
//   //       "auth",
//   //       JSON.stringify({ token: token, user: user })
//   //     );

//   //     // Redirect to user role page
//   //     navigate(`/${user.role}`, { replace: true });

//   //   } catch (err) {
//   //     if (!err?.response) {
//   //       setErrMsg("Server is not responding.");
//   //     } else if (err.response?.status === 400) {
//   //       setErrMsg("Invalid email or password.");
//   //     } else if (err.response?.status === 401) {
//   //       setErrMsg("Unauthorized.");
//   //     } else {
//   //       setErrMsg("Login failed.");
//   //     }
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post(
//         LOGIN_URL,
//         { email, password: pwd },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const token = response?.data?.token;
//       const user = response?.data?.user;

//       if (!token || !user) {
//         setErrMsg("Invalid email or password.");
//         return;
//       }

//       // ⭐ Save full user data in context
//       setAuth({
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         token: token
//       });

//       // ⭐ Save to local storage
//       localStorage.setItem(
//         "auth",
//         JSON.stringify({
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//           token: token
//         })
//       );

//       // ⭐ redirect based on role
//       navigate(`/${user.role}`, { replace: true });

//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("Server is not responding.");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Invalid email or password.");
//       } else if (err.response?.status === 401) {
//         setErrMsg("Unauthorized.");
//       } else {
//         setErrMsg("Login failed.");
//       }
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${bgImg})`,
//         minHeight: "80vh",
//         position: "absolute",
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: "cover",
//       }}
//     >
//       <Container component="main" maxWidth="sm">
//         <Box
//           sx={{
//             boxShadow: 3,
//             borderRadius: 2,
//             px: 4,
//             py: 6,
//             marginTop: 8,
//             backgroundColor: "#e3eefc",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
//             MediAuthNet
//           </Typography>

//           <Typography variant="h6" sx={{ mt: 2 }}>
//             Login
//           </Typography>

//           {errMsg && (
//             <Typography
//               ref={errRef}
//               variant="body2"
//               color="error"
//               sx={{ mt: 2 }}
//             >
//               {errMsg}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               required
//               fullWidth
//               label="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <TextField
//               required
//               fullWidth
//               type="password"
//               label="Password"
//               sx={{ mt: 2 }}
//               onChange={(e) => setPwd(e.target.value)}
//             />

//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="Remember me"
//             />

//             <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
//               Login
//             </Button>

//             {/* ✅ REGISTER BUTTON */}
//             <Button
//               onClick={() => navigate("/register")}
//               fullWidth
//               sx={{ mt: 1 }}
//             >
//               Don't have an account? Register
//             </Button>

//             {/* ✅ BACK BUTTON */}
//             <Button
//               onClick={() => navigate("/")}
//               fullWidth
//               sx={{ mt: 1 }}
//             >
//               Back
//             </Button>

//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }



import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import bgImg from "../../img/bg.png";
import api from "../../api/axios";
import useAuth from "../../hooks/useAuth";

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login";

export default function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const errRef = useRef(null);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        LOGIN_URL,
        { email, password: pwd },
        { headers: { "Content-Type": "application/json" } }
      );

      const token = response?.data?.token;
      const user = response?.data?.user;

      if (!token || !user) {
        setErrMsg("Invalid email or password.");
        return;
      }

      // Save full user data
      const authData = {
        id: user.id,   // Corrected
        name: user.name,
        email: user.email,
        role: user.role,
        token: token,
      };

      setAuth(authData);
      localStorage.setItem("auth", JSON.stringify(authData));

      navigate(`/${user.role}`, { replace: true });

    } catch (err) {
      if (!err?.response) setErrMsg("Server not responding.");
      else if (err.response.status === 400) setErrMsg("Invalid email/password.");
      else if (err.response.status === 401) setErrMsg("Email not verified!");
      else setErrMsg("Login failed.");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            backgroundColor: "#e3eefc",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
            MediAuthNet Login
          </Typography>

          {errMsg && (
            <Typography ref={errRef} color="error" sx={{ mt: 2, textAlign: "center" }}>
              {errMsg}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              sx={{ mt: 2 }}
              required
              onChange={(e) => setPwd(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Login
            </Button>

            <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate("/register")}>
              Register
            </Button>

            <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate("/")}>
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
