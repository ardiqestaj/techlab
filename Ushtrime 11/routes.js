import express from "express";
import {
  createDestination,
  deleteDestination,
  getAllDestinations,
  getDestinationById,
  getMostAttractons,
  getTotalVistorCount,
  updateDestiantion,
} from "./controllers/destinationController.js";

const router = express.Router();

router.get("/getAllDestinations", getAllDestinations);
router.get("/mostAttraction", getMostAttractons);
router.get("/totalVisitorCount", getTotalVistorCount);
router.get("/getDestination/:id", getDestinationById);
router.post("/createNewDestination", createDestination);
router.put("/updateDestination/:id", updateDestiantion);
router.delete("/deleteDestination/:id", deleteDestination);

export default router;
