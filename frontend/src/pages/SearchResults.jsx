// src/pages/SearchResults.jsx
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const BASE_URL = 'http://localhost:8080';

export default function SearchResults() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page')) || 1;

    const [books, setBooks] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchInput, setSearchInput] = useState(query);

    const limit = 10;

    const fetchSearchResults = async (searchQuery, pageNum) => {
        if (!searchQuery.trim()) {
            setBooks([]);
            setTotal(0);
            return;
        }

        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams({
                q: searchQuery,
                page: pageNum,
                limit,
            });
            const res = await fetch(`${BASE_URL}/api/popular/handleSearchBooks?${params}`);
            const data = await res.json();

            if (data.success) {
                setBooks(data.data.books || []);
                setTotal(data.data.total || 0);
            } else {
                setError(data.message || 'Không tìm thấy kết quả');
                setBooks([]);
                setTotal(0);
            }
        } catch (err) {
            console.error('Lỗi tìm kiếm:', err);
            setError('Đã có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại.');
            setBooks([]);
            setTotal(0);
        } finally {
            setLoading(false);
        }
    };

    // Tải kết quả khi query hoặc page thay đổi
    useEffect(() => {
        if (query) {
            fetchSearchResults(query, page);
            setSearchInput(query); // Đồng bộ input
        } else {
            setBooks([]);
            setTotal(0);
        }
    }, [query, page]);

    // Xử lý tìm kiếm mới
    const handleSearch = (e) => {
        e.preventDefault();
        const newQuery = searchInput.trim();
        if (!newQuery) return;

        const params = new URLSearchParams();
        params.set('q', newQuery);
        params.set('page', '1'); // Reset về trang 1
        setSearchParams(params);
    };

    // Xử lý đổi trang
    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage);
        setSearchParams(params);
    };

    return (
        <>
            {/* Search Bar - Cố định ở trên */}
            <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <form onSubmit={handleSearch} className="flex gap-3 items-center">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Tìm kiếm sách, tác giả, ISBN..."
                                className="w-full pl-12 pr-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            />
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition"
                        >
                            Tìm kiếm
                        </button>
                    </form>

                    {/* Hiển thị kết quả tìm kiếm */}
                    {query && (
                        <div className="mt-4 text-sm text-gray-600">
                            Kết quả cho: <span className="font-semibold text-indigo-600">"{query}"</span>
                            {total > 0 && (
                                <span className="ml-2">
                                    — <strong>{total}</strong> sách
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Nội dung chính */}
            <main className="flex-grow bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-16">
                            <p className="text-red-600 text-lg">{error}</p>
                            <Link
                                to="/"
                                className="mt-4 inline-block text-indigo-600 hover:underline"
                            >
                                ← Quay về trang chủ
                            </Link>
                        </div>
                    ) : books.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-gray-600 text-lg mb-4">
                                {query
                                    ? `Không tìm thấy sách nào cho "${query}"`
                                    : 'Nhập từ khóa để tìm kiếm'}
                            </p>
                            <Link
                                to="/"
                                className="text-indigo-600 hover:underline"
                            >
                                ← Khám phá sách nổi bật
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Grid sách */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {books.map((book) => (
                                    <BookCard
                                        key={book.book_id}
                                        book={book}
                                        onQuickView={() => { }} // Tạm để trống, hoặc thêm QuickView nếu cần
                                    />
                                ))}
                            </div>

                            {/* Phân trang */}
                            <Pagination
                                page={page}
                                total={total}
                                limit={limit}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}