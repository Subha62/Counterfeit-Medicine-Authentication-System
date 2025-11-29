import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    token = token.split(" ")[1]; // remove "Bearer"

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Load user from DB
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Invalid token: user not found." });
    }

    req.user = user; // save user in request
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
