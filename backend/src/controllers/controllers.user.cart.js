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
        if (!data.success) { Response.badRequest(res, data.message, 400); }

        Response.success(res, data.data, 'Thêm sản phẩm vào giỏ thành công', 200);
    } catch (err) {
        console.error("Lỗi controllers:", err);
        Response.error(res, 'Lỗi server', 500);
    }
};