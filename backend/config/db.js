import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DATABASE);
    /* await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); */
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection fail", err.message);
    process.exit(1);
  }
};

export default connectDB;
