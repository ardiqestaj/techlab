import express from "express";
import {
  createTour,
  deleteTour,
  getOneTour,
  getTours,
} from "./tour.controller.js";

const router = express();

router.post("/", createTour);
router.get("/", getTours);
router.get("/:id", getOneTour);
router.delete("/:id", deleteTour);

export default router;
