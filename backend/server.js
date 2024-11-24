import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import wordRoutes from "./routes/wordRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("MNA_Dictionary's Api is working");
});

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOption));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/words", wordRoutes);

app.listen(port, () => {
  connectDB();
  console.log("MNA_Dictionary's Server is running on port" + " " + port);
});
