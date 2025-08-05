import express from "express";
import { createBooking, getAllBookings } from "./booking.controller.js";
import { isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express.Router();

// createBooking
router.post("/:tourId", isAuthnticated, createBooking);
router.get("/getAll", isAuthnticated, getAllBookings);

// getAllBooking
// getMyBookings
// updateStatsu
// cancelMyBooking
// deleteBooking
// updateBooking
// stats

export default router;
