import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  changePassword,
} from "./user.controller.js";
import { isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", isAuthnticated, getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/change-passowrd", changePassword);

export default router;
