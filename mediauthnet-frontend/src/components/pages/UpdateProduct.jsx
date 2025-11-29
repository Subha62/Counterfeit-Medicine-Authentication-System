import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button
} from "@mui/material";
import bgImg from "../../img/bg.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const qrToken = location.state?.qrToken || location.state?.product?.qrToken;
  const [product, setProduct] = useState(null);

  // -----------------------------
  // LOAD PRODUCT BY QR TOKEN
  // -----------------------------
  useEffect(() => {
    if (!qrToken) return;

    const loadProduct = async () => {
      try {
        const res = await api.get(`/products/verify/${qrToken}`);
        setProduct(res.data.product);
      } catch (err) {
        console.log("Product load error:", err);
      }
    };

    loadProduct();
  }, [qrToken]);

  if (!product) {
    return (
      <Typography textAlign="center" mt={10}>
        Loading product details...
      </Typography>
    );
  }

  const handleUpdate = () => {
    navigate("/update-product-details", { state: { product } });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        paddingTop: "50px"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "450px",
          margin: "auto",
          padding: "25px",
          backgroundColor: "#e3eefc",
          borderRadius: "10px"
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          Product Details
        </Typography>

        {/* -----------------------------
            PRODUCT HEADER
        ------------------------------ */}
        <Box sx={{ display: "flex", mb: 3 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 2, bgcolor: "#567" }}
            src={product.imageUrl ? `http://localhost:5000/${product.imageUrl}` : ""}
          >
            {product.name?.charAt(0)}
          </Avatar>

          <Box>
            <Typography variant="h6">{product.name}</Typography>
            <Typography>Serial Number: {product.serialNumber}</Typography>
            <Typography>Batch Number: {product.batchNumber}</Typography>
            <Typography>
              Manufacturer: {product?.manufacturer?.name || "Unknown"}
            </Typography>
          </Box>
        </Box>

        {/* -----------------------------
            TIMELINE SECTION
        ------------------------------ */}
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Created: {dayjs(product.createdAt).format("DD/MM/YYYY")}
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>Status: {product.status}</TimelineContent>
          </TimelineItem>
        </Timeline>

        {/* -----------------------------
            ACTIONS
        ------------------------------ */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleUpdate}
          sx={{ mt: 2 }}
        >
          Update Product
        </Button>

        <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Paper>
    </Box>
  );
};

export default UpdateProduct;
