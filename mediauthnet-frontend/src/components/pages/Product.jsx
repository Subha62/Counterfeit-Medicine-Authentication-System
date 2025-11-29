import { Box, Paper, Avatar, Typography, Button } from "@mui/material";
import bgImg from "../../img/bg.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();

  // qrToken comes from ScannerPage
  const qrToken = location.state?.qrData;

  const [product, setProduct] = useState(null);
  const [history, setHistory] = useState([]);
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    if (!qrToken) return;

    verifyProduct();
  }, [qrToken]);

  // -------------------------------
  // VERIFY PRODUCT USING BACKEND
  // -------------------------------
  const verifyProduct = async () => {
    try {
      const response = await api.get(`/products/verify/${qrToken}`);

      if (!response.data.verified) {
        navigate("/fake-product");
        return;
      }

      const productData = response.data.product;

      setProduct(productData);
      setIsSold(productData.metadata?.isSold || false);

      // If backend provides history:
      if (productData.metadata?.history) {
        setHistory(productData.metadata.history);
      }

    } catch (err) {
      console.log(err);
      navigate("/fake-product");
    }
  };

  const handleBack = () => navigate(-1);

  const renderHistory = () => {
    if (!history.length)
      return (
        <Typography sx={{ textAlign: "center", mt: 2 }}>
          No history available.
        </Typography>
      );

    return history.map((item, i) => (
      <TimelineItem key={i}>
        <TimelineOppositeContent color="textSecondary">
          {dayjs(item.timestamp).format("HH:mm A")}{" "}
          {dayjs(item.timestamp).format("MM/DD/YYYY")}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography>Actor: {item.actor}</Typography>
          <Typography>Location: {item.location}</Typography>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  if (!product)
    return (
      <Typography sx={{ color: "white", textAlign: "center", mt: 10 }}>
        Loading product...
      </Typography>
    );

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "80vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "50px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "420px",
          margin: "auto",
          padding: "25px",
          backgroundColor: "#e3eefc",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          ✅ Authentic Product
        </Typography>

        {/* Basic product details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            alt={product.name}
            sx={{
              width: 90,
              height: 90,
              backgroundColor: "#3f51b5",
              mr: 2,
            }}
          >
            {product.name[0]}
          </Avatar>

          <Box>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2">
              Serial: {product.serialNumber}
            </Typography>
            <Typography variant="body2">
              Batch: {product.batchNumber || "Not Available"}
            </Typography>
            <Typography variant="body2">
              Status: {product.status}
            </Typography>
          </Box>
        </Box>

        {/* Metadata */}
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Manufacture Date:</strong>{" "}
          {product.manufactureDate
            ? dayjs(product.manufactureDate).format("MMM DD, YYYY")
            : "Unknown"}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Expiry Date:</strong>{" "}
          {product.expiryDate
            ? dayjs(product.expiryDate).format("MMM DD, YYYY")
            : "Unknown"}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Last Location:</strong>{" "}
          {product.metadata?.location || "Unknown"}
        </Typography>

        {/* Timeline */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: 3,
            mb: 1,
          }}
        >
          Product History
        </Typography>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {renderHistory()}

          <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
              {dayjs().format("HH:mm A")} {dayjs().format("MM/DD/YYYY")}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>IsSold: {isSold.toString()}</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        {/* Back Button */}
        <Button fullWidth sx={{ mt: 2 }} onClick={handleBack}>
          Back
        </Button>
      </Paper>
    </Box>
  );
}
