import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import toast from "react-hot-toast";
const API_URL = import.meta.env.VITE_API_URL;
export default function BookCard({ book = {} }) {

    const images = book.Images || book.images || book.BookImages || [];
    const coverImage = images[0]?.image_url
        ? `${API_URL}${images[0].image_url}`
        : "/book_default.jpg";

    const reviews = book.Reviews || book.reviews || [];
    const avgRating = reviews.length
        ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
        : 0;

    const price = Number(book.price || 0);

    // addToCart
    const { addToCart } = useAuth();
    const handleAddToCart = async () => {
        try {
            const res = await addToCart(book.book_id, 1);
            if (!res) return;
            if (res.success) {
                // alert("Đã thêm sản phẩm vào giỏ hàng.");
                toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
                    duration: 3000, // 3 giây
                });
            }
            else {
                // alert("Thêm sản phẩm không thành công");
                toast.error("Thêm sản phẩm không thành công!", {
                    duration: 3000,
                });
            }
        }
        catch (err) {
            console.log("Lỗi" + err);
            // alert("Lỗi : Thêm sản phẩm không thành công");
            toast.error("Lỗi : Thêm sản phẩm không thành công!", {
                duration: 3000,
            });
        }
    }

    return (
        <>
            <Link to={`/bookDetail/${book.book_id}`} className="block">
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
                    <img
                        src={coverImage}
                        alt={book.title || "book"}
                        className="w-full h-56 object-cover rounded-t-lg"
                    />

                    <div className="p-3">
                        <h3 className="font-semibold text-lg line-clamp-1">
                            {book.title || "Không có tiêu đề"}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-1">
                            {book.author || "Không biết"}
                        </p>

                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`text-yellow-500 ${i < Math.floor(avgRating) ? "" : "opacity-30"}`}
                                >
                                    ⭐
                                </span>
                            ))}
                            <span className="text-xs text-gray-500">
                                {avgRating} ({reviews.length})
                            </span>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                            <span className="text-xl font-bold">${price.toFixed(2)}</span>

                            <button
                                onClick={(e) => { e.preventDefault(); handleAddToCart(); }/*() => console.log("TODO: Thêm vào giỏ hàng", book.book_id)*/}
                                className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            </Link >
        </>
    );
}
