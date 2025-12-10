import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookDetailsAPI, getRelatedBooksAPI } from '../../api/auth';
const BACKEND = "http://localhost:8080";

export default function BookDetail() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [relatedPage, setRelatedPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentImage, setCurrentImage] = useState('');
    const [activeTab, setActiveTab] = useState('description');
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const relatedLimit = 5;

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await getBookDetailsAPI(id);
                const data = res.data;
                const book = data.book;

                const allImages = book.Images || [];
                const coverImg = allImages.find(img => img.image_type === 'cover') || allImages[0];
                const gallery = allImages.filter(img => img.image_type === 'gallery');

                const coverUrl = coverImg ? `${BACKEND}${coverImg.image_url}` : '/book_default.jpg';
                const galleryUrls = gallery.map(img => `${BACKEND}${img.image_url}`);

                setBookData({
                    ...data,
                    book: {
                        ...book,
                        cover: coverUrl,
                        gallery: galleryUrls,
                    },
                });

                setCurrentImage(coverUrl);

                if (book.category_id) {
                    fetchRelatedBooks(book.category_id, book.book_id, 1);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    const fetchRelatedBooks = async (categoryId, excludeId, page) => {
        try {
            const res = await getRelatedBooksAPI(categoryId, excludeId, page, relatedLimit);
            const result = res.data;

            // Cập nhật đúng dữ liệu phân trang
            setRelatedBooks(result.books);
            setRelatedPage(result.pagination.page);
            setTotalPages(result.pagination.totalPages);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <p className="text-center py-20">Đang tải...</p>;
    if (!bookData?.book) return <p className="text-center py-20">Không tìm thấy sách</p>;

    const { book } = bookData;
    const avgRating = book.Reviews?.length > 0
        ? (book.Reviews.reduce((sum, r) => sum + r.rating, 0) / book.Reviews.length).toFixed(1)
        : 0;

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchRelatedBooks(book.category_id, book.book_id, newPage);
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* <Link to="/" className="flex items-center text-indigo-600 mb-6 hover:underline text-sm">
                    Về Trang Home
                </Link> */}

                <div className="grid lg:grid-cols-2 gap-8 ">
                    <div className='select-none'>
                        <img
                            src={currentImage}
                            alt={bookData.book.title}
                            className="w-full h-[500px] md:h-[600px] object-contain bg-white rounded-lg shadow-lg "
                            loading="eager"
                        />
                        {book.gallery?.length > 0 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                {[book.cover, ...book.gallery].map((url, i) => (
                                    <img
                                        key={i}
                                        src={url}
                                        alt={`Thumb ${i + 1}`}
                                        onClick={() => setCurrentImage(url)}
                                        className={`w-20 h-20 object-contain bg-white rounded cursor-pointer border-2 transition-all ${currentImage === url ? 'border-indigo-600' : 'border-gray-300'
                                            } hover:border-indigo-400`}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
                        <p className="text-lg text-gray-600 mt-1">by {book.author}</p>

                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < Math.floor(avgRating) ? '' : 'opacity-30'}>⭐</span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">
                                {avgRating} ({book.Reviews?.length || 0} đánh giá)
                            </span>
                        </div>

                        <p className="text-3xl font-bold text-indigo-600 mt-4">
                            ${parseFloat(book.price).toFixed(2)}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                            <div>
                                <p className="text-gray-500">Tác giả</p>
                                <p className="font-medium">{book.publisher}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">ISBN</p>
                                <p className="font-medium">{book.book_id.toString().padStart(10, '0')}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Năm</p>
                                <p className="font-medium">2025</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Số lượng</p>
                                <p className="font-medium text-green-600">{book.stock} đang còn</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center border rounded">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-1 hover:bg-gray-100"
                                >-</button>
                                <input type="number" value={quantity} readOnly className="w-12 text-center border-x" />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-1 hover:bg-gray-100"
                                >+</button>
                            </div>
                            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition text-lg">
                                Thêm vào giỏ
                            </button>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <div className="flex gap-8 border-b text-lg font-medium">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`pb-3 transition-all ${activeTab === 'description'
                                        ? 'border-b-4 border-indigo-600 text-indigo-600'
                                        : 'text-gray-600 hover:text-indigo-600'
                                        }`}
                                >
                                    Mô tả
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`pb-3 transition-all relative ${activeTab === 'reviews'
                                        ? 'border-b-4 border-indigo-600 text-indigo-600'
                                        : 'text-gray-600 hover:text-indigo-600'
                                        }`}
                                >
                                    Đánh giá
                                    {book.Reviews?.length > 0 && (
                                        <span className="absolute -top-1 -right-6 bg-indigo-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                                            {book.Reviews.length}
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveTab('shipping')}
                                    className={`pb-3 transition-all ${activeTab === 'shipping'
                                        ? 'border-b-4 border-indigo-600 text-indigo-600'
                                        : 'text-gray-600 hover:text-indigo-600'
                                        }`}
                                >
                                    Giao Hàng
                                </button>
                            </div>

                            <div className="mt-6 min-h-48">
                                {activeTab === 'description' && (
                                    <div className="text-gray-700 leading-relaxed">
                                        {book.description}
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div>
                                        {book.Reviews?.length > 0 ? (
                                            <div className="space-y-6">
                                                {book.Reviews.map((rev) => (
                                                    <div key={rev.review_id} className="border-b pb-6 last:border-0">
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-semibold text-gray-900">
                                                                {rev.User?.name || 'Anonymous'}
                                                            </span>
                                                            <div className="flex text-yellow-500">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <span key={i} className={i < rev.rating ? '' : 'opacity-30'}>⭐</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-700 mt-2">{rev.comment}</p>
                                                        <p className="text-xs text-gray-500 mt-2">
                                                            {new Date(rev.createdAt).toLocaleDateString('vi-VN', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                            })}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-500 italic">Chưa có đánh giá nào.</p>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'shipping' && (
                                    <div className="text-gray-700 space-y-2">
                                        <p>Free shipping cho đơn hàng từ $50</p>
                                        <p>Giao hàng toàn quốc: 3-5 ngày làm việc</p>
                                        <p>Đổi trả trong 7 ngày</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {relatedBooks.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Sách liên quan</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {relatedBooks.map((b) => {
                                const coverUrl = b.Images?.[0]
                                    ? `${BACKEND}${b.Images[0].image_url || b.Images[0]}`
                                    : '/book_default.jpg';
                                return (
                                    <Link
                                        key={b.book_id}
                                        to={`/bookDetail/${b.book_id}`}
                                        className="bg-white rounded-lg shadow hover:shadow-md transition"
                                    >
                                        <img src={coverUrl} alt={b.title} className="w-full h-40 object-cover rounded-t-lg" />
                                        <div className="p-3">
                                            <h3 className="font-medium text-sm line-clamp-2">{b.title}</h3>
                                            <p className="text-xs text-gray-600 mt-1">by {b.author}</p>
                                            <p className="text-lg font-bold text-indigo-600 mt-2">
                                                ${parseFloat(b.price).toFixed(2)}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={() => handlePageChange(relatedPage - 1)}
                                disabled={relatedPage === 1}
                                className="px-5 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50 transition"
                            >
                                ◀ Trước
                            </button>

                            <div className="text-sm text-gray-600">
                                Trang <span className="font-bold text-indigo-600">{relatedPage}</span> /{' '}
                                <span className="font-bold">{totalPages}</span>
                            </div>

                            <button
                                onClick={() => handlePageChange(relatedPage + 1)}
                                disabled={relatedPage === totalPages}
                                className="px-5 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50 transition"
                            >
                                Sau ▶
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}