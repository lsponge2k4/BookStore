import { Link } from 'react-router-dom';
export default function BookCard({ book = {} }) {

    const images = book.Images || book.images || book.BookImages || [];
    const coverImage = images[0]?.image_url
        ? `http://localhost:8080${images[0].image_url}`
        : "/book_default.jpg";

    const reviews = book.Reviews || book.reviews || [];
    const avgRating = reviews.length
        ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
        : 0;

    const price = Number(book.price || 0);

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
                                onClick={() => console.log("TODO: Thêm vào giỏ hàng", book.book_id)}
                                className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
