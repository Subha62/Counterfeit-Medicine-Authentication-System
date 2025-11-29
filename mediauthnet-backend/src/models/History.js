import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: false,
    },

    // Image used for ML prediction
    imagePath: {
      type: String,
      required: false,
    },

    // ML prediction result
    prediction: {
      type: String,   // 'genuine' or 'counterfeit'
      required: false,
    },

    // Probability (0 - 1)
    confidence: {
      type: Number,
      required: false,
    },

    // QR code token used during verification
    qrToken: {
      type: String,
      required: false,
    },

    // Final decision from hybrid logic:
    // authentic, suspicious, counterfeit
    result: {
      type: String,
      enum: ["authentic", "suspicious", "counterfeit"],
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("History", historySchema);
