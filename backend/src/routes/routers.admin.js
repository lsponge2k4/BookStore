import express from "express";
import * as AdminController from "../controllers/controllers.admin";
import * as AdminMiddlewares from "../middlewares/middlewares.admin";
import * as AdminValidation from "../validations/validations.admin";

const router = express.Router();


export default router;