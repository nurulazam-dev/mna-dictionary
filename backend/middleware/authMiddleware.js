import User from "../models/UserSchema";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  let token = req.cookies.token || req.headers.authorization;

  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: "Authorization failed" });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};
