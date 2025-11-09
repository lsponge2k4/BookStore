import express from "express";
import * as AdminController from "../controllers/controllers.admin";
import * as AdminMiddleware from "../middlewares/middlewares.admin";
import * as AdminValidation from "../validations/validations.admin";
import * as UserMiddleware from "../middlewares/middlewares.user";
import uploadCategoryImage from "../config/upload.category";
import uploadBookImages from "../config/upload.book.js";

const router = express.Router();

router.get("/admin/getAllUsers", UserMiddleware.isAuthenticated, AdminMiddleware.validate(AdminValidation.validGetAllUsers), AdminMiddleware.isAdmin, AdminController.getAllUsers);

router.post("/admin/createCategory", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, uploadCategoryImage.single("image"), AdminMiddleware.validateBody(AdminValidation.checkCreateCategory), AdminController.createCategory);

router.put("/admin/updateCategory", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, uploadCategoryImage.single("image"), AdminMiddleware.validateBody(AdminValidation.checkUpdateCategory), AdminController.updateCategory);

router.delete("/admin/deleteCategory/:category_id", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, AdminController.deleteCategory);

router.get("/admin/getAllCategories", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, AdminMiddleware.validate(AdminValidation.checkGetAllCategories), AdminController.getAllCategories);

router.get("/admin/getAllBooksAdmin", UserMiddleware.isAuthenticated, AdminMiddleware.isAdmin, AdminMiddleware.validate(AdminValidation.validGetAllUsers), AdminController.getAllBookAdmin);

router.post(
    "/admin/createBook",
    UserMiddleware.isAuthenticated,
    AdminMiddleware.isAdmin,
    uploadBookImages.fields([
        { name: "cover", maxCount: 1 },
        { name: "gallery", maxCount: 5 },
    ]),
    AdminMiddleware.validateBody(AdminValidation.checkCreateBook),
    AdminController.createBook
);

export default router;