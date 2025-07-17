import express from "express";
import {
  createTour,
  deleteTour,
  getOneTour,
  getTours,
  updateTour,
} from "./tour.controller.js";

const router = express();

router.post("/", createTour);
router.get("/", getTours);
router.get("/:id", getOneTour);
router.delete("/:id", deleteTour);
router.put("/:id", updateTour);

export default router;
