import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// router.post("/register", registerUser);
// router.post("/login", loginUser);

// Sign Up Route
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the user
  const newUser = new User({ email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid credentials");

  const token = jwt.encode({ userId: user._id }, JWT_SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.status(200).send("Logged in successfully");
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send("Logged out");
});

export default router;
