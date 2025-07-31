import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  changePassword,
  deleteMe,
} from "./user.controller.js";
import { authorize, isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", isAuthnticated, authorize(["admin", "moderator"]), getAllUsers);
router.get(
  "/:id",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  getOneUser
);
router.put(
  "/:id",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  updateUser
);
router.delete(
  "/:id",
  isAuthnticated,
  authorize(["admin", "moderator"]),
  deleteUser
);
router.delete(
  "/deleteMe",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  deleteMe
);
router.put(
  "/change-passowrd",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  isAuthnticated,
  changePassword
);

export default router;
