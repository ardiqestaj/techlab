import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabe from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors("*"));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

const startServer = async () => {
  try {
    // DB
    await connectDatabe();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
