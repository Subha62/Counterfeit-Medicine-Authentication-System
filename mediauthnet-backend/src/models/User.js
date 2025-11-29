// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             required:true,
//             trim:true,
//         },
        
//         email:{
//             type:String,
//             required:true,
//             unique:true,
//             lowercase:true,
//         },

//         password:{
//             type:String,
//             required:true,
//         },

//         role:{
//             type:String,
//             enum:["admin","manufacturer","retailer","suppiler","user"],
//             default:"user",
//         },
//     },
//     {timestamps:true}
// );

// export default  mongoose.model("User",userSchema);



import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "manufacturer", "retailer", "supplier", "user"],
      default: "user",
    },

    // ⭐ NEW: For OTP Verification
    otp: {
      type: String,
      default: null,
    },

    otpExpires: {
      type: Date,
      default: null,
    },

    // ⭐ NEW: Email must be verified before login
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
