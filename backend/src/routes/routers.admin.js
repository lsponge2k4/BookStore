import express from "express";
import * as AdminController from "../controllers/controllers.admin";
import * as AdminMiddleware from "../middlewares/middlewares.admin";
import * as AdminValidation from "../validations/validations.admin";
import * as UserMiddleware from "../middlewares/middlewares.user";
import uploadCategoryImage from "../config/upload.category";



const router = express.Router();

router.get("/admin/getAllUsers", UserMiddleware.isAuthenticated, AdminMiddleware.validate(AdminValidation.validGetAllUsers), AdminMiddleware.isAdmin, AdminController.getAllUsers);

router.post("/admin/createCategory", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, uploadCategoryImage.single("image"), AdminMiddleware.validateBody(AdminValidation.checkCreateCategory), AdminController.createCategory);

router.put("/admin/updateCategory", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, uploadCategoryImage.single("image"), AdminMiddleware.validateBody(AdminValidation.checkUpdateCategory), AdminController.updateCategory);
export default router;