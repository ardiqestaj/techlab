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

const router = express();

router.post("/", createTour);
router.get("/", getTours);
router.get("/getTourStats", getTourstats);
router.get("/:id", getOneTour);
router.delete("/:id", deleteTour);
router.put("/:id", updateTour);
router.post("/:tourId/addReview", addReview);

export default router;
