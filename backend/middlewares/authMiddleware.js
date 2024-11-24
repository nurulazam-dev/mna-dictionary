import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT
    const user = await User.findById(decoded.id).select("-password"); // Find user by ID, exclude password
    if (!user) {
      return res.status(401).json({ error: "User not found." });
    }

    req.user = user; // Attach user details to request
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied. Admins only." });
  }
  next();
};
