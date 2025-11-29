// import React, { useState } from "react";
// import { Box, TextField, Button, Typography } from "@mui/material";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Submitted:", formData);

//     // ⭐ Perform your action here ⭐
//     // Examples:
//     // axios.post("/api/contact", formData)
//     // fetch("/contact", { method: "POST", body: JSON.stringify(formData) })

//     alert("Your message has been sent!");
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "600px",
//         margin: "0 auto",
//         padding: "40px",
//         background: "#f5f5f5",
//         borderRadius: "10px",
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
//         Contact Us
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Your Name"
//           name="name"
//           fullWidth
//           margin="normal"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           label="Email Address"
//           name="email"
//           fullWidth
//           margin="normal"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <TextField
//           label="Your Message"
//           name="message"
//           multiline
//           rows={4}
//           fullWidth
//           margin="normal"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ marginTop: "20px", padding: "10px" }}
//         >
//           Send Message
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Contact;




// import React, { useState } from "react";
// import { Box, TextField, Button, Typography, Paper } from "@mui/material";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Your message has been sent!");
//   };

//   return (
//     <Box
//       id ="contact-section"
//       sx={{
//         minHeight: "100vh",
//         padding: "60px 20px",
//         marginTop:"60px",

//         // ⭐ EXACT HERO BACKGROUND
//         backgroundColor: "#E6F0FF",
//       }}
//     >
//       <Paper
//         elevation={4}
//         sx={{
//           width: "100%",
//           maxWidth: "600px",
//           margin: "0 auto",
//           padding: "40px",
//           borderRadius: "18px",
//         }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={3}
//           textAlign="center"
//           color="#000336"
//         >
//           Contact Us
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             mb: 3,
//             color: "#687690",
//             fontSize: "16px",
//           }}
//         >
//           Have questions or feedback? We’re here to help!
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Your Name"
//             name="name"
//             fullWidth
//             margin="normal"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "10px",
//               },
//             }}
//           />

//           <TextField
//             label="Email Address"
//             name="email"
//             fullWidth
//             margin="normal"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "10px",
//               },
//             }}
//           />

//           <TextField
//             label="Your Message"
//             name="message"
//             multiline
//             rows={4}
//             fullWidth
//             margin="normal"
//             required
//             value={formData.message}
//             onChange={handleChange}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "10px",
//               },
//             }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               marginTop: "25px",
//               padding: "10px",
//               fontSize: "16px",
//               backgroundColor: "#0F1B4C",
//               textTransform: "none",
//               borderRadius: "10px",
//               "&:hover": {
//                 backgroundColor: "#102a63",
//               },
//             }}
//           >
//             Send Message
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ⭐ FIXED API ENDPOINT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/email/send-email",
        formData
      );

      alert("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <Box
      id="contact-section"
      sx={{
        minHeight: "100vh",
        padding: "60px 20px",
        marginTop: "60px",
        backgroundColor: "#E6F0FF",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "18px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          textAlign="center"
          color="#000336"
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            mb: 3,
            color: "#687690",
            fontSize: "16px",
          }}
        >
          Have questions or feedback? We’re here to help!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            margin="normal"
            required
            value={formData.name}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />

          <TextField
            label="Email Address"
            name="email"
            fullWidth
            margin="normal"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />

          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
            value={formData.message}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              marginTop: "25px",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#0F1B4C",
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#102a63" },
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
