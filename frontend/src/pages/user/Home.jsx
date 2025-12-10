import { useEffect, useState } from "react";
import BannerCarousel from "../../components/user/BannerCarousel";
import BookCard from "../../components/user/BookCard";
import { getBooksAPI } from "../../api/auth";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const limit = 8;

    const loadBooks = async (p) => {
        setLoading(true);

        try {
            const res = await getBooksAPI(p, limit);

            const data = res.data || {};
            const list = data.books || [];
            const pagination = data.pagination || {};

            setBooks(list);
            setPage(pagination.page || p);
            setTotalPages(pagination.totalPages || 1);
        } catch (err) {
            alert("Lỗi tải sách! Xem console để biết thêm.");
            console.error("Lỗi tải sách:", err);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBooks(page);
    }, [page]);

    return (
        <div className="flex flex-col min-h-screen">
            <BannerCarousel />

            <main className="flex-grow">
                <section className="max-w-7xl mx-auto px-4 py-14">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                        Sách mới nhất
                    </h2>

                    {/* Loading */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                        </div>
                    ) : books.length === 0 ? (
                        <p className="text-center text-gray-500 py-10">
                            Không tìm thấy sách nào.
                        </p>
                    ) : (
                        <>
                            <div className="
                                grid 
                                grid-cols-2 
                                md:grid-cols-3 
                                lg:grid-cols-4 
                                gap-6
                                select-none
                            ">
                                {books.map((book) => (
                                    <BookCard
                                        key={book.book_id || book.id}
                                        book={book}
                                    />
                                ))}
                            </div>

                            {/* PHÂN TRANG */}
                            <div className="flex justify-center mt-10 gap-4 items-center">

                                {/* Previous */}
                                <button
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                >
                                    ◀ Trước
                                </button>

                                <span className="px-4 py-2 text-lg font-medium">
                                    Trang {page} / {totalPages}
                                </span>

                                {/* Next */}
                                <button
                                    disabled={page === totalPages}
                                    onClick={() => setPage(page + 1)}
                                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                                >
                                    Sau ▶
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </main>
        </div>
    );
}
