import express from "express";
import * as HelloController from "../controllers/controllers.hello.js";

const router = express.Router();

router.get("/hello", HelloController.hello);

export default router;
