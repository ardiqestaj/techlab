import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabe from "./config/database.js";
import apiRoutes from "./routes/routes.js";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors("*"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use("/api", apiRoutes);

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
