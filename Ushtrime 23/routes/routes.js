import express from "express";

const router = express.Router();
import userRoutes from "../modules/user/user.routes.js";
import tourRoutes from "../modules/tour/tour.routes.js";
import authRoutes from "../modules/auth/auth.routes.js";
import bookingRoutes from "../modules/booking/booking.routes.js";

router.use("/users", userRoutes);
router.use("/tours", tourRoutes);
router.use("/auth", authRoutes);
router.use("/booking", bookingRoutes);

export default router;
