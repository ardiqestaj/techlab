import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
