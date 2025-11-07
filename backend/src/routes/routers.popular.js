import express from "express";
import * as PopularController from "../controllers/controllers.popular";
import * as PopularMiddlewares from "../middlewares/middlewares.popular";
import * as PopularValidation from "../validations/validations.popular";

const router = express.Router();

router.get("/popular/getFilterOptions", PopularController.getFilterOptions);

router.get("/popular/getFilteredBook", PopularMiddlewares.validate(PopularValidation.checkGetFilteredBooks), PopularController.getFilteredBook);
export default router;