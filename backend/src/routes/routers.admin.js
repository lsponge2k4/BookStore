import express from "express";
import * as AdminController from "../controllers/controllers.admin";
import * as AdminMiddleware from "../middlewares/middlewares.admin";
import * as AdminValidation from "../validations/validations.admin";
import * as UserMiddleware from "../middlewares/middlewares.user";



const router = express.Router();

router.get("/admin/getAllUsers", UserMiddleware.isAuthenticated, AdminMiddleware.validate(AdminValidation.validGetAllUsers), AdminMiddleware.isAdmin, AdminController.getAllUsers);

export default router;