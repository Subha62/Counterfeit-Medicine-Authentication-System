// import Product from "../models/Product.js";
// import { nanoid } from "nanoid";

// // -----------------------------------
// // CREATE PRODUCT (Manufacturer only)
// // -----------------------------------
// export const createProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       batchNumber,
//       manufactureDate,
//       expiryDate,
//       metadata,
//     } = req.body;

//     // Generate unique QR token
//     const qrToken = nanoid(12);

//     const product = new Product({
//       name,
//       batchNumber,
//       manufactureDate,
//       expiryDate,
//       metadata,
//       manufacturer: req.user._id,
//       qrToken,
//     });

//     await product.save();

//     return res.status(201).json({
//       message: "Product created successfully",
//       product,
//       qrToken,
//     });
//   } catch (error) {
//     console.error("Create Product Error:", error);
//     res.status(500).json({ message: "Failed to create product" });
//   }
// };

// // -----------------------------------
// // VERIFY PRODUCT QR TOKEN (Public API)
// // -----------------------------------
// export const verifyQR = async (req, res) => {
//   try {
//     const { qrToken } = req.params;

//     const product = await Product.findOne({ qrToken }).populate(
//       "manufacturer",
//       "name email role"
//     );

//     if (!product) {
//       return res.status(404).json({
//         verified: false,
//         message: "Invalid or counterfeit product",
//       });
//     }

//     // If product is revoked or inactive
//     if (product.status !== "active") {
//       return res.json({
//         verified: false,
//         message: "Product has been revoked / inactive",
//         product,
//       });
//     }

//     return res.json({
//       verified: true,
//       message: "Product QR token is valid",
//       product,
//     });
//   } catch (error) {
//     console.error("QR Verification Error:", error);
//     res.status(500).json({ message: "QR verification failed" });
//   }
// };

// // -----------------------------------
// // GET SINGLE PRODUCT
// // -----------------------------------
// export const getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id).populate(
//       "manufacturer",
//       "name email role"
//     );

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json(product);
//   } catch (error) {
//     console.error("Get Product Error:", error);
//     res.status(500).json({ message: "Failed to fetch product" });
//   }
// };

// // -----------------------------------
// // GET ALL PRODUCTS (Admin / Manufacturer)
// // -----------------------------------
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find()
//       .populate("manufacturer", "name email");

//     res.json(products);
//   } catch (error) {
//     console.error("Get All Products Error:", error);
//     res.status(500).json({ message: "Failed to load products" });
//   }
// };

// // -----------------------------------
// // UPDATE PRODUCT
// // -----------------------------------
// export const updateProduct = async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json({
//       message: "Product updated",
//       product: updated,
//     });
//   } catch (error) {
//     console.error("Update Product Error:", error);
//     res.status(500).json({ message: "Failed to update product" });
//   }
// };

// // -----------------------------------
// // DELETE PRODUCT
// // -----------------------------------
// export const deleteProduct = async (req, res) => {
//   try {
//     const deleted = await Product.findByIdAndDelete(req.params.id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json({
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete Product Error:", error);
//     res.status(500).json({ message: "Failed to delete product" });
//   }
// };



import Product from "../models/Product.js";
import { nanoid } from "nanoid";

// =====================================
// CREATE PRODUCT (Manufacturer only)
// =====================================
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      serialNumber,
      batchNumber,
      manufactureDate,
      expiryDate,
      metadata,
    } = req.body;

    // Generate unique QR token
    const qrToken = nanoid(12);

    const product = new Product({
      name,
      serialNumber,
      batchNumber,
      manufactureDate,
      expiryDate,
      metadata,
      manufacturer: req.user._id, // from auth middleware
      qrToken,
    });

    await product.save();

    return res.status(201).json({
      message: "Product created successfully",
      product,
      qrToken,
    });
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

// =====================================
// VERIFY QR TOKEN (PUBLIC)
// =====================================
export const verifyQR = async (req, res) => {
  try {
    const { qrToken } = req.params;

    const product = await Product.findOne({ qrToken }).populate(
      "manufacturer",
      "name email role"
    );

    if (!product) {
      return res.status(404).json({
        verified: false,
        message: "Invalid or counterfeit product",
      });
    }

    if (product.status !== "active") {
      return res.json({
        verified: false,
        message: "Product has been revoked / inactive",
        product,
      });
    }

    return res.json({
      verified: true,
      message: "Product QR token is valid",
      product,
    });
  } catch (error) {
    console.error("QR Verification Error:", error);
    res.status(500).json({ message: "QR verification failed" });
  }
};





// =====================================
// GET PRODUCT BY SERIAL NUMBER
// =====================================
export const getProductBySerial = async (req, res) => {
  try {
    const { serialNumber } = req.params;

    const product = await Product.findOne({ serialNumber }).populate(
      "manufacturer",
      "name email role"
    );

    if (!product) {
      return res.status(404).json({
        message: "No product found with this serial number",
      });
    }

    return res.json(product);
  } catch (error) {
    console.error("Get Product by Serial Error:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

// =====================================
// GET SINGLE PRODUCT
// =====================================
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "manufacturer",
      "name email role"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Get Product Error:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

// =====================================
// GET ALL PRODUCTS (Admin / Manufacturer)
// =====================================
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate(
      "manufacturer",
      "name email"
    );

    res.json(products);
  } catch (error) {
    console.error("Get All Products Error:", error);
    res.status(500).json({ message: "Failed to load products" });
  }
};

// =====================================
// UPDATE PRODUCT
// =====================================
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product updated",
      product: updated,
    });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

// =====================================
// DELETE PRODUCT
// =====================================
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};
