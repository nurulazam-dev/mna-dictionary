import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("MNA_Dictionary's Api is working");
});

// DB_Connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection fail");
  }
};

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOption));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/words", wordRoutes);

app.listen(port, () => {
  connectDB();
  console.log("MNA_Dictionary's Server is running on port" + " " + port);
});
