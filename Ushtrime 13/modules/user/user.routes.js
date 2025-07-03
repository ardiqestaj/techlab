import express from "express";
import { createUser } from "./user.controller.js";

const router = express.Router();

router.post("/", createUser); // getAllUsers

export default router;
