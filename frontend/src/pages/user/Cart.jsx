import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getAllProductsInCartAPI, clearAllCartItemsInCartAPI } from "../../api/auth";
import toast from "react-hot-toast";
const API_URL = import.meta.env.VITE_API_URL;
export default function Cart() {
    const { user, increaseQuantity, decreaseQuantity, removeABook, fetchCartItems, fetchCartCount } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login", { state: { from: "/cart" } });
            return;
        }
        loadCart();
    }, [user]);

    const loadCart = async () => {
        setLoading(true);
        try {
            const res = await getAllProductsInCartAPI();
            setCartItems(res.data || []);
        } catch (err) {
            console.error("Không lấy được giỏ hàng", err);

        } finally { setLoading(false); }
    };

    const handleIncrease = async (id) => {
        await increaseQuantity(id);
        loadCart();
    };

    const handleDecrease = async (id) => {
        await decreaseQuantity(id);
        loadCart();
    };

    const handleRemove = async (id) => {
        await removeABook(id);
        loadCart();
    };
    const handleClearAll = async () => {
        if (!confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) return;
        try {
            await clearAllCartItemsInCartAPI();
            toast.success("Đã xóa thành công!", {
                duration: 3000,
            });
            fetchCartCount();
            await loadCart();
        } catch (err) {
            alert(err.message);
        }
    };

    // Tổng tiền
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + Number(item.Book.price) * item.quantity,
        0
    );

    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Giỏ hàng</h1>

            {/* Nút xóa tất cả */}
            {cartItems.length > 0 && (
                <button
                    className="mb-4 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 
               text-white font-semibold shadow-md
               hover:from-red-600 hover:to-red-700 
               active:scale-95 transition-all duration-200"
                    onClick={handleClearAll}
                >
                    Xóa tất cả
                </button>
            )}

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                </div>
            ) : (cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg">Giỏ hàng trống</p>
            ) : (
                <div>
                    {/* Container: chỉ hiển thị 3 item, phần còn lại scroll */}
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 border-2 rounded-lg select-none border-orange-200">

                        {cartItems.map((item) => {
                            const book = item.Book;
                            const img = book.Images?.[0]?.image_url
                                ? `${API_URL}${book.Images[0].image_url}`
                                : "/book_default.jpg";

                            return (
                                <div
                                    key={item.cart_item_id}
                                    className="flex gap-4 bg-white shadow rounded-lg p-4"
                                >
                                    {/* Ảnh */}
                                    <Link to={`/bookDetail/${book.book_id}`}>
                                        <img
                                            src={img}
                                            className="w-24 h-32 object-cover rounded-md"
                                        />
                                    </Link>

                                    {/* Nội dung */}
                                    <div className="flex-1">
                                        {/* Tiêu đề */}
                                        <Link
                                            to={`/bookDetail/${book.book_id}`}
                                            className="text-lg font-semibold hover:text-indigo-600"
                                        >
                                            {book.title}
                                        </Link>

                                        {/* Nhà xuất bản */}
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">NXB:</span> {book.publisher}
                                        </p>

                                        {/* Danh mục */}
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Danh mục:</span>{" "}
                                            {book.Category?.name || "Không có"}
                                        </p>

                                        {/* Giá */}
                                        <p className="text-indigo-600 font-bold text-xl mt-1">
                                            ${Number(book.price).toFixed(2)}
                                        </p>

                                        {/* Nút tăng/giảm */}
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => handleDecrease(book.book_id)}
                                                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                −
                                            </button>

                                            <span className="font-semibold">{item.quantity}</span>

                                            <button
                                                onClick={() => handleIncrease(book.book_id)}
                                                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Xoá */}
                                    <button
                                        onClick={() => handleRemove(book.book_id)}
                                        className="text-red-500 font-semibold hover:underline"
                                    >
                                        Xoá
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tổng + Nút thanh toán */}
                    <div className="mt-6 p-4 bg-white shadow rounded-lg select-none">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold">
                                Tổng: <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
                            </p>

                            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
