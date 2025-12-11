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

// get all products in user's cart.

export const getUserCart = async (userId) => {
    const cart = await db.Cart.findOne({
        where: { user_id: userId, status: 'active' },
        include: [
            {
                model: db.CartItem,
                attributes: ['cart_item_id', 'quantity'],
                include: [
                    {
                        model: db.Book,
                        attributes: ['book_id', 'title', 'price', 'publisher'],
                        include: [
                            {
                                model: db.Image,
                                as: "Images",
                                required: false,
                                attributes: ["image_url", "image_type"],
                                where: { image_type: "cover" },
                            },
                            {
                                model: db.Category,
                                as: "Category",
                                attributes: ["name"],
                            }
                        ]
                    }
                ],
            },
        ],
    });

    if (!cart) {
        return { success: true, data: [], message: "Chưa có sản phẩm trong giỏ hàng." };
    }

    return { success: true, data: cart.CartItems };
};

// remove a book from cart

export const removeBookFromCart = async (userId, bookId) => {
    // Get cart active
    const cart = await db.Cart.findOne({ where: { user_id: userId, status: 'active' } });

    if (!cart) { return { success: false, message: "Giỏ hàng không tồn tại" }; }

    // Get cartItem need delete
    const cartItem = await db.CartItem.findOne({
        where: { cart_id: cart.cart_id, book_id: bookId }
    });

    if (!cartItem) { return { success: false, message: "Sản phẩm không tồn tại trong giỏ hàng" }; }

    // Delete cartItem
    await cartItem.destroy();

    return { success: true, data: null, message: "Xóa sản phẩm khỏi giỏ hàng thành công" };
};


// increase book quantity.

export const increaseBookQuantity = async (userId, bookId) => {
    try {

        const cart = await db.Cart.findOne({ where: { user_id: userId, status: "active" } });
        if (!cart) { return { success: false, message: "Giỏ hàng không tồn tại" }; }

        const cartItem = await db.CartItem.findOne({ where: { cart_id: cart.cart_id, book_id: bookId } });
        if (!cartItem) { return { success: false, message: "Sản phẩm không tồn tại trong giỏ hàng" }; }

        // Get book.
        const book = await db.Book.findByPk(bookId);
        if (!book) { { return { success: false, message: "Sách không tồn tại" } }; }

        if (cartItem.quantity >= book.stock) {
            return { success: false, message: `Số lượng tối đa là ${book.stock}. Không thể nhập thêm.` };
        }

        // update quantity of cartItem.
        cartItem.quantity += 1;
        await cartItem.save();

        return { success: true, data: cartItem, message: "Tăng số lượng sản phẩm thành công" };
    } catch (err) {
        console.error("increaseBookQuantity error:", err);
        return { success: false, message: "Lỗi server khi tăng số lượng" };
    }
};

// decrease book quantity.

export const decreaseBookQuantity = async (userId, bookId) => {
    try {
        const cart = await db.Cart.findOne({ where: { user_id: userId, status: "active" } });
        if (!cart) return { success: false, message: "Giỏ hàng không tồn tại" };

        const cartItem = await db.CartItem.findOne({ where: { cart_id: cart.cart_id, book_id: bookId } });
        if (!cartItem) return { success: false, message: "Sản phẩm không tồn tại trong giỏ hàng" };

        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            await cartItem.save();
            return { success: true, data: cartItem, message: "Giảm số lượng sản phẩm thành công" };
        } else {
            // await cartItem.destroy();
            // return { success: true, message: "Đã xóa sản phẩm khỏi giỏ hàng vì số lượng = 0" };
            return { success: true, data: cartItem, message: "Số lượng sản phẩm đã về 1." };
        }
    } catch (err) {
        console.error("decreaseBookQuantity error:", err);
        return { success: false, message: "Lỗi server khi giảm số lượng" };
    }
};


// clear UserCart.

export const clearUserCart = async (userId) => {
    try {
        const cart = await db.Cart.findOne({ where: { user_id: userId, status: "active" } });
        if (!cart) {
            return { success: false, message: "Giỏ hàng không tồn tại" };
        }

        const deletedCount = await db.CartItem.destroy({
            where: { cart_id: cart.cart_id }
        });
        // console.log("deletedCount", deletedCount);
        if (deletedCount === 0) {
            return { success: false, message: "Giỏ hàng đã trống" };
        }
        else {
            return {
                success: true,
                data: null,
                message: `Đã xóa ${deletedCount} sản phẩm khỏi giỏ hàng`
            };
        }
    } catch (err) {
        console.error("clearUserCart error:", err);
        return { success: false, message: "Lỗi server khi xóa giỏ hàng" };
    }
};