import mongoose from "mongoose";

const connectDatabe = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;
    const connection = await mongoose.connect(connectionString);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌  MongoDB Connection Failed:");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDatabe;
