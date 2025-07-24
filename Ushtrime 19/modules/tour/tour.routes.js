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

const router = express();

router.post("/", upload.single("image"), createTour);
router.get("/", getTours);
router.get("/getTourStats", getTourstats);
router.get("/:id", getOneTour);
router.delete("/:id", deleteTour);
router.put("/:id", updateTour);
router.post("/:tourId/addReview", addReview);

export default router;
