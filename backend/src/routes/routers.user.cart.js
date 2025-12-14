import express from "express";
import * as UserCartController from "../controllers/controllers.user.cart.js";
import * as UserMiddleware from "../middlewares/middlewares.user.js";
import * as UserCartValidation from "../validations/validations.user.cart.js"

const router = express.Router();


router.post("/user/cart/addToCart", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserCartValidation.addToCartSchema), UserCartController.addToCart);

router.get("/user/cart/getAllProductsInCart", UserMiddleware.isAuthenticated, UserCartController.getAllProductsInCart);

router.post("/user/cart/removeABook", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserCartValidation.removeFromCartSchema), UserCartController.removeFromCart);

router.post("/user/cart/increaseQuantity", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserCartValidation.increaseOrDecreaseSchema), UserCartController.increaseQuantity);

router.post("/user/cart/decreaseQuantity", UserMiddleware.isAuthenticated, UserMiddleware.validate(UserCartValidation.increaseOrDecreaseSchema), UserCartController.decreaseQuantity);

router.delete("/user/cart/clearAllCartItemsInCart", UserMiddleware.isAuthenticated, UserCartController.clearAllCartItemsInCart);

export default router;