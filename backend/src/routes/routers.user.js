import express from "express";
import * as UserController from "../controllers/controllers.user";
import * as UserMiddleware from "../middlewares/middlewares.user";
import * as UserValidation from "../validations/validations.user";
import upload from "../config/upload";

const router = express.Router();

router.post("/user/register", UserMiddleware.validate(UserValidation.checkRegister), UserController.register);

router.post("/user/login", UserMiddleware.validate(UserValidation.checkLogin), UserController.login);

router.post("/user/forgotPassword", UserMiddleware.validate(UserValidation.checkForgotPassword), UserController.forgotPassword);

router.post("/user/resetPassword", UserMiddleware.validate(UserValidation.checkResetPassword), UserMiddleware.verifyResetToken, UserController.resetPassword);

router.get("/user/getInfo", UserMiddleware.isAuthenticated, UserController.getProfile);

router.put("/user/updateInfo", UserMiddleware.isAuthenticated, upload.single("avatar"), UserController.updateProfile);

router.put("/user/changePassword", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserValidation.checkChangePassword), UserController.changePassword);

router.post("/user/logout", UserMiddleware.isAuthenticated, UserController.logout);

// auth refresh token
router.post("/user/refreshToken", UserMiddleware.refreshToken);

export default router;