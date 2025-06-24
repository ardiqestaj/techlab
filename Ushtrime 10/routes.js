import express from "express";
import {
  getAllDestinations,
  getDestinationById,
  getMostAttractons,
  getTotalVistorCount,
} from "./controllers/destinationController.js";

const router = express.Router();

router.get("/getAllDestinations", getAllDestinations);
router.get("/mostAttraction", getMostAttractons);
router.get("/totalVisitorCount", getTotalVistorCount);
router.get("/getDestination/:id", getDestinationById);

export default router;
