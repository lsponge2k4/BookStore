import express from "express";
import * as HomeController from "../controllers/controllers.home";

const router = express.Router();

router.get("/home/getAllBook/public", HomeController.getAllBook);

export default router;