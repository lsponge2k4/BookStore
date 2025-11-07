import express from "express";
import * as HomeController from "../controllers/controllers.home";

const router = express.Router();

router.get("/home/getAllBook/public", HomeController.getAllBook);

router.get('/home/getBookById', HomeController.getBook);

export default router;