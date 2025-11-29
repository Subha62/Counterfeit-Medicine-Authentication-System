import { Box, Paper, Typography, Button } from "@mui/material";
import bgImg from "../../img/bg.png";
import { useNavigate, useLocation } from "react-router-dom";

const AuthenticProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const qrToken = location.state?.qrData;

  const goToProduct = () => {
    navigate("/product", { state: { qrData: qrToken } });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "50px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          margin: "auto",
          padding: "25px",
          backgroundColor: "#e3eefc",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            fontFamily: "Montserrat",
          }}
        >
          🎉 Authentic Product!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Montserrat",
          }}
        >
          This product is verified and genuine.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Click below to view full product details.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#0F1B4C",
            "&:hover": { backgroundColor: "#07215e" },
          }}
          onClick={goToProduct}
        >
          View Product Details
        </Button>
      </Paper>
    </Box>
  );
};

export default AuthenticProduct;
