import db from '../models/index';

// add product in user's cart.
export const addBookToCart = async (userId, bookId, quantity = 1) => {
    // check stock of book
    const book = await db.Book.findByPk(bookId);
    if (!book) {
        return { success: false, message: "Sản phẩm không tồn tại" };
    }

    // Check cart active of user.
    let cart = await db.Cart.findOne({ where: { user_id: userId, status: 'active' } });

    // If none, create new cart.
    if (!cart) {
        cart = await db.Cart.create({ user_id: userId, status: 'active' });
    }

    // Check valid of cart.
    let cartItem = await db.CartItem.findOne({
        where: { cart_id: cart.cart_id, book_id: bookId },
    });

    if (cartItem) {
        // If had cart, just add quantity;
        const totalQuantity = cartItem.quantity + quantity;
        if (totalQuantity > book.stock) {
            return { success: false, message: "Số lượng trong kho không đủ" };
        }
        cartItem.quantity = totalQuantity;
        await cartItem.save();
    } else {

        if (quantity > book.stock) {
            return { success: false, message: "Số lượng trong kho không đủ" };
        }
        // If none, create new cartItem for that product.
        cartItem = await db.CartItem.create({
            cart_id: cart.cart_id,
            book_id: bookId,
            quantity,
        });
    }

    return {
        success: true,
        data: { cart, cartItem },
    };
};