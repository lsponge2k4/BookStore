import * as UserCartService from "../services/services.user.cart.js";
import * as Response from "../utils/response.js";
import logger from "../config/logger.js";


// add product in user's cart.

export const addToCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);
        const quantity = parseInt(req.body.quantity);

        // console.log(`userId: ${userId} bookId: ${bookId} quantity: ${quantity}`)
        const data = await UserCartService.addBookToCart(userId, bookId, quantity);
        if (!data.success) {
            logger.error("addToCart controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }

        logger.info("addToCart controller success:", { message: 'Thêm sản phẩm vào giỏ thành công' });
        return Response.success(res, data.data, 'Thêm sản phẩm vào giỏ thành công', 200);
    } catch (err) {
        logger.error("addToCart controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// get all products in user's cart.

export const getAllProductsInCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const data = await UserCartService.getUserCart(userId);
        if (!data.success) {
            logger.error("getAllProductsInCart controller error: Không lấy được sản phẩm trong giỏ hàng");
            return Response.badRequest(res, "Không lấy được sản phẩm trong giỏ hàng", 400);
        }
        logger.info("getAllProductsInCart controller success: Lấy giỏ hàng thành công");
        return Response.success(res, data.data, 'Lấy giỏ hàng thành công', 200);
    } catch (err) {
        logger.error("getAllProductsInCart controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// remove a book from cart

export const removeFromCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.removeBookFromCart(userId, bookId);

        if (!data.success) {
            logger.error("removeFromCart controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }
        logger.info("removeFromCart controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        logger.error("removeFromCart controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// increase book quantity.

export const increaseQuantity = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.increaseBookQuantity(userId, bookId);
        if (!data.success) {
            logger.error("increaseQuantity controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }

        logger.info("increaseQuantity controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        logger.error("increaseQuantity controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};

// decrease book quantity.

export const decreaseQuantity = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.decreaseBookQuantity(userId, bookId);
        if (!data.success) {
            logger.error("decreaseQuantity controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }
        logger.info("decreaseQuantity controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        logger.error("decreaseQuantity controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};


// clear all CartItems of User's cart.

export const clearAllCartItemsInCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);

        const data = await UserCartService.clearUserCart(userId);

        if (!data.success) {
            logger.error("clearAllCartItemsInCart controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }
        logger.info("clearAllCartItemsInCart controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        logger.error("clearAllCartItemsInCart controller error:", { error: err });
        // console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};