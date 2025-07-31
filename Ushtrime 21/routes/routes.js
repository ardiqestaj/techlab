import express from "express";

const router = express.Router();
import userRoutes from "../modules/user/user.routes.js";
import tourRoutes from "../modules/tour/tour.routes.js";
import authRoutes from "../modules/auth/auth.routes.js";

router.use("/users", userRoutes);
router.use("/tours", tourRoutes);
router.use("/auth", authRoutes);

export default router;
