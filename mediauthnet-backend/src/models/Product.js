// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     batchNumber: {
//       type: String,
//       required: false,
//     },

//     manufactureDate: {
//       type: Date,
//       required: false,
//     },

//     expiryDate: {
//       type: Date,
//       required: false,
//     },

//     manufacturer: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     // Unique QR token used for verifying authenticity
//     qrToken: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     // Product status (admin can revoke)
//     status: {
//       type: String,
//       enum: ["active", "revoked"],
//       default: "active",
//     },

//     // Extra information supplier/manufacturer wants to store
//     metadata: {
//       type: Object,
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Product", productSchema);



import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },

    batchNumber: {
      type: String,
      required: false,
    },

    manufactureDate: {
      type: Date,
      required: false,
    },

    expiryDate: {
      type: Date,
      required: false,
    },

    manufacturer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Unique QR token used for verifying authenticity
    qrToken: {
      type: String,
      required: true,
      unique: true,
    },

    // Product status (admin can revoke)
    status: {
      type: String,
      enum: ["active", "revoked"],
      default: "active",
    },

    // Extra info
    metadata: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
