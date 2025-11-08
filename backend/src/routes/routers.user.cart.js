import express from "express";
import * as UserCartController from "../controllers/controllers.user.cart";
import * as UserMiddleware from "../middlewares/middlewares.user";
import * as UserCartValidation from "../validations/validations.user.cart"

const router = express.Router();


router.post("/user/cart/addToCart", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserCartValidation.addToCartSchema), UserCartController.addToCart);

router.get("/user/cart/getAllProductsInCart", UserMiddleware.isAuthenticated, UserCartController.getAllProductsInCart);

export default router;