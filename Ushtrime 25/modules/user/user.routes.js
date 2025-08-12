import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  changePassword,
  deleteMe,
  updateMe,
  getMe,
} from "./user.controller.js";
import { authorize, isAuthnticated } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", isAuthnticated, authorize(["admin", "moderator"]), getAllUsers);
router.get(
  "/getMe",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  getMe
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
router.put(
  "/updateMe",
  isAuthnticated,
  authorize(["admin", "moderator", "user"]),
  updateMe
);
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

export default router;
