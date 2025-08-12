import express from "express";
import {
  cancelMyBooking,
  createBooking,
  deleteBooking,
  getAllBookings,
  getBookingStats,
  updateBooking,
  updateStatus,
} from "./booking.controller.js";
import { authorize, isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express.Router();

// createBooking
router.get(
  "/getAll",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  getAllBookings
);

router.put(
  "/updateStatus/:bookingId",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  updateStatus
);
router.put(
  "/cancelMyBooking/:bookingId",
  isAuthnticated,
  authorize(["user"]),
  cancelMyBooking
);
router.delete(
  "/:bookingId",
  isAuthnticated,
  authorize(["admin"]),
  deleteBooking
);
router.post("/:tourId", isAuthnticated, createBooking);
router.put("/updateBooking/:bookingId", isAuthnticated, updateBooking);
router.get(
  "/bookingStats",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  getBookingStats
);
// stats

export default router;
