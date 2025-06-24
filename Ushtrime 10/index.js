import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import destinationRouter from "./routes.js";

dotenv.config();

const app = express();
app.use(cors("*"));
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("mire po bon");
//   res.json({ message: "success" });
// });

app.use("/api", destinationRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
