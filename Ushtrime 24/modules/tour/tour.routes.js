import express from "express";
import {
  addReview,
  createTour,
  deleteTour,
  getOneTour,
  getTours,
  getTourstats,
  updateTour,
} from "./tour.controller.js";
import upload from "../../config/multer.js";
import { authorize, isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express();

router.post(
  "/",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  upload.single("image"),
  createTour
);
router.get("/", getTours);
router.get("/getTourStats", getTourstats);
router.get("/:id", getOneTour);
router.delete("/:id", isAuthnticated, authorize(["admin"]), deleteTour);
router.put(
  "/:id",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  updateTour
);
router.post(
  "/:tourId/addReview",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  addReview
);

export default router;
