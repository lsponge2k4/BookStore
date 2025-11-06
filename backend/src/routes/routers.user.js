import express from "express";
import * as UserController from "../controllers/controllers.user";
import * as UserMiddleware from "../middlewares/middlewares.user";
import * as UserValidation from "../validations/validations.user";

const router = express.Router();

router.post("/user/register", UserMiddleware.validate(UserValidation.checkRegister), UserController.register);

router.post("/user/login", UserMiddleware.validate(UserValidation.checkLogin), UserController.login);

export default router;