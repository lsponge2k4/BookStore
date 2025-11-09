import * as UserCartService from "../services/services.user.cart";
import * as Response from "../utils/response";


// add product in user's cart.

export const addToCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);
        const quantity = parseInt(req.body.quantity);

        // console.log(`userId: ${userId} bookId: ${bookId} quantity: ${quantity}`)
        const data = await UserCartService.addBookToCart(userId, bookId, quantity);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, 'Thêm sản phẩm vào giỏ thành công', 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// get all products in user's cart.

export const getAllProductsInCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const data = await UserCartService.getUserCart(userId);
        if (!data.success) { return Response.badRequest(res, "Không lấy được sản phẩm trong giỏ hàng", 400); }
        return Response.success(res, data.data, 'Lấy giỏ hàng thành công', 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// remove a book from cart

export const removeFromCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.removeBookFromCart(userId, bookId);

        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// increase book quantity.

export const increaseQuantity = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.increaseBookQuantity(userId, bookId);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};

// decrease book quantity.

export const decreaseQuantity = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);
        const bookId = parseInt(req.body.book_id);

        const data = await UserCartService.decreaseBookQuantity(userId, bookId);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};


// clear all CartItems of User's cart.

export const clearAllCartItemsInCart = async (req, res) => {
    try {
        const userId = parseInt(req.user.user_id);

        const data = await UserCartService.clearUserCart(userId);

        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};