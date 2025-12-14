import express from "express";
import * as PopularController from "../controllers/controllers.popular.js";
import * as PopularMiddlewares from "../middlewares/middlewares.popular.js";
import * as PopularValidation from "../validations/validations.popular.js";

const router = express.Router();

router.get("/popular/getFilterOptions", PopularController.getFilterOptions);

router.get("/popular/getFilteredBook", PopularMiddlewares.validate(PopularValidation.checkGetFilteredBooks), PopularController.getFilteredBook);

router.get("/popular/handleSearchBooks", PopularMiddlewares.validate(PopularValidation.checkSearchBooks), PopularController.handleSearchBooks);

export default router;