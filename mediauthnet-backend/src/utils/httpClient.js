import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const INFERENCE_URL = process.env.INFERENCE_URL || "http://localhost:9000/predict";

export const callInference = async (imagePath) => {
  try {
    const form = new FormData();
    form.append("file", fs.createReadStream(imagePath));

    const response = await axios.post(INFERENCE_URL, form, {
      headers: {
        ...form.getHeaders(),
      },
      timeout: 120000, // 2 minutes timeout for ML
    });

    return response.data; // { prediction, confidence }
  } catch (error) {
    console.error("Inference Service Error:", error.response?.data || error.message);
    throw new Error("Failed to get prediction from ML service");
  }
};
