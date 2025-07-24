import express from "express";

const router = express.Router();
import userRoutes from "../modules/user/user.routes.js";
import tourRoutes from "../modules/tour/tour.routes.js";

router.use("/users", userRoutes);
router.use("/tours", tourRoutes);

export default router;
