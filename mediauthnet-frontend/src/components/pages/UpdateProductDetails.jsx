import { Box, Paper, Typography, Autocomplete } from "@mui/material";
import bgImg from "../../img/bg.png";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const saleOptions = ["true", "false"];

export default function UpdateProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();

  // Product forwarded from UpdateProduct.jsx
  const product = location.state?.product;

  const [currentDate, setCurrentDate] = useState(Date.now());
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [fullLocation, setFullLocation] = useState("");
  const [isSold, setIsSold] = useState(
    product?.metadata?.isSold ? "true" : "false"
  );
  const [loading, setLoading] = useState("");

  // ----------------------------
  // Fetch location + time
  // ----------------------------
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });

    setCurrentDate(Date.now());
  }, []);

  // Convert GPS → readable address
  useEffect(() => {
    if (!latitude || !longitude) return;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFullLocation(data?.display_name || "Unknown Location");
      })
      .catch((err) => console.log(err));
  }, [latitude, longitude]);

  // ----------------------------
  // UPDATE PRODUCT API
  // ----------------------------
  const handleSubmit = async () => {
    setLoading("Updating product...");

    try {
      const updated = await api.put(
        `/products/${product._id}`,
        {
          metadata: {
            ...product.metadata, // merge old metadata
            lastUpdated: new Date(),
            location: fullLocation,
            latitude,
            longitude,
            isSold: isSold === "true",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setLoading("Product updated successfully!");

      setTimeout(() => navigate("/profile"), 1200);
    } catch (error) {
      console.log(error);
      setLoading("Failed to update product.");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
        paddingTop: "50px",
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "450px",
          margin: "auto",
          padding: "25px",
          backgroundColor: "#e3eefc",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" textAlign="center" mb={3}>
          Update Product
        </Typography>

        <TextField
          fullWidth
          label="Product Name"
          disabled
          value={product?.name}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Serial Number"
          disabled
          value={product?.serialNumber}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Current Location"
          disabled
          multiline
          minRows={2}
          value={fullLocation}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Date & Time"
          disabled
          value={dayjs(currentDate).format("MMMM D, YYYY h:mm A")}
          sx={{ mb: 2 }}
        />

        {/* Only retailers NOT suppliers should see this */}
        {auth.role !== "supplier" && (
          <Autocomplete
            disablePortal
            options={saleOptions}
            value={isSold}
            onChange={(e, val) => setIsSold(val)}
            renderInput={(params) => (
              <TextField {...params} label="Is Sold?" sx={{ mb: 2 }} />
            )}
          />
        )}

        {loading && (
          <Typography textAlign="center" sx={{ mt: 1 }}>
            {loading}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Save Changes
        </Button>

        <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Paper>
    </Box>
  );
}
