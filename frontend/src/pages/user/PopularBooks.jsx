import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BookCard from '../../components/user/BookCard';
import { getFilteredBookAPI, getFilterOptionsAPI } from '../../api/auth';

// const BACKEND = "http://localhost:8080";

export default function PopularBooks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        categoryId: searchParams.get('categoryId') || '',
        author: searchParams.get('author') || '',
        publisher: searchParams.get('publisher') || '',
        minPrice: searchParams.get('minPrice') || '',
        maxPrice: searchParams.get('maxPrice') || '',
        sort: searchParams.get('sort') || 'desc',
        page: parseInt(searchParams.get('page')) || 1,
        limit: 12,
    });
    const [options, setOptions] = useState({
        authors: [],
        publishers: [],
        categories: [],
        priceRange: { min_price: 0, max_price: 0 },
    });

    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState({ totalPages: 1, currentPage: 1, totalBooks: 0 });
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Tạo query từ filters
    const buildQueryParams = (obj) => {
        const params = new URLSearchParams();
        for (const key in obj) {
            if (obj[key] !== '' && obj[key] != null) {
                params.append(key, obj[key]);
            }
        }
        return params;
    };

    // Cập nhật URL
    const updateURL = (newFilters) => {
        const params = buildQueryParams(newFilters);
        setSearchParams(params, { replace: true });
    };

    // Hàm tải danh sách 
    const fetchBooks = async (newFilters = filters) => {
        setLoading(true);
        setErrorMsg('');
        try {
            const query = buildQueryParams(newFilters);
            const res = await getFilteredBookAPI(query.toString());
            const data = res;
            // alert(data.success)
            if (!data.success) {
                setErrorMsg(data.message || 'Lỗi tải sách');
                setBooks([]);
                return;
            }

            setBooks(data.data.books);
            setPagination({
                totalPages: data.data.totalPages,
                currentPage: data.data.currentPage,
                totalBooks: data.data.totalBooks,
            });
        } catch (err) {
            setErrorMsg('Lỗi kết nối server');
        } finally {
            setLoading(false);
        }
    };
    // Tải lọc tác giả ban đầu
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const res = await getFilterOptionsAPI();
                const data = res;
                // alert("API response: " + JSON.stringify(data));
                if (data.success) {
                    const { authors, publishers, categories, priceRange } = data.data;
                    setOptions({ authors, publishers, categories, priceRange });
                    setFilters((prev) => ({
                        ...prev,
                        minPrice: prev.minPrice || priceRange.min_price,
                        maxPrice: prev.maxPrice || priceRange.max_price,
                    }));
                }
            } catch (err) {
                setErrorMsg('Không thể tải bộ lọc!');
            }
        };
        fetchOptions();
    }, []);
    // Load lần đầu lấy api sách
    useEffect(() => {
        fetchBooks(filters);
    }, []);

    // Hàm gộp logic lặp
    const applyFilters = (newFilters) => {
        setFilters(newFilters);
        updateURL(newFilters);
        fetchBooks(newFilters);
    };
    // Các handler
    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleApply = () => {
        applyFilters({ ...filters, page: 1 });
    };

    const handlePageChange = (page) => {
        applyFilters({ ...filters, page });
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const clearFilters = () => {
        const reset = {
            categoryId: '',
            author: '',
            publisher: '',
            minPrice: options.priceRange.min_price,
            maxPrice: options.priceRange.max_price,
            sort: 'desc',
            page: 1,
            limit: 12,
        };
        applyFilters(reset);
    };
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Các sách phổ biến</h1>
                <p className="text-sm text-gray-600 mb-6">
                    Hiển thị {(filters.page - 1) * filters.limit + 1}-
                    {Math.min(filters.page * filters.limit, pagination.totalBooks)} của {pagination.totalBooks} sách
                </p>

                {/* Tìm kiếm */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700">Sắp xếp:</span>
                        <button
                            onClick={() => handleFilterChange('sort', 'desc')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filters.sort === 'desc'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Mới nhất
                        </button>
                        <button
                            onClick={() => handleFilterChange('sort', 'asc')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filters.sort === 'asc'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Cũ nhất
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
                        >
                            Xóa toàn bộ
                        </button>
                        <button
                            onClick={handleApply}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* SIDEBAR */}
                    <aside className="w-64 space-y-6 hidden lg:block">
                        <div className="bg-white p-4 rounded-lg shadow">
                            {/* Khoảng giá */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-2">Khoảng giá</h4>
                                <input
                                    type="range"
                                    min={options.priceRange.min_price}
                                    max={options.priceRange.max_price}
                                    value={filters.maxPrice}
                                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>${filters.minPrice}</span>
                                    <span>${filters.maxPrice}</span>
                                </div>
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-2">Danh mục</h4>
                                {options.categories.map((c) => (
                                    <label key={c.category_id} className="flex items-center gap-2 text-sm cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={c.category_id}
                                            checked={filters.categoryId === c.category_id.toString()}
                                            onChange={(e) => handleFilterChange('categoryId', e.target.value)}
                                            className="text-indigo-600"
                                        />
                                        {c.name}
                                    </label>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-2">Tác giả</h4>
                                <select
                                    value={filters.author}
                                    onChange={(e) => handleFilterChange('author', e.target.value)}
                                    className="w-full p-2 border rounded text-sm"
                                >
                                    <option value="">-- Tất cả tác giả --</option>
                                    {options.authors.map((a, i) => (
                                        <option key={i} value={a}>
                                            {a}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Publisher */}
                            <div>
                                <h4 className="font-medium mb-2">Nhà xuất bản</h4>
                                <select
                                    value={filters.publisher}
                                    onChange={(e) => handleFilterChange('publisher', e.target.value)}
                                    className="w-full p-2 border rounded text-sm"
                                >
                                    <option value="">-- Tất cả nhà xuất bản --</option>
                                    {options.publishers.map((p, i) => (
                                        <option key={i} value={p}>
                                            {p}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <div className="flex-1">
                        {errorMsg && (
                            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                                {errorMsg}
                            </div>
                        )}

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                            </div>
                        ) : books.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">Không có sách nào phù hợp.</div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 select-none">
                                    {books.map((book) => (
                                        <BookCard key={book.book_id} book={book} />
                                    ))}
                                </div>

                                {pagination.totalPages > 1 && (
                                    <div className="flex justify-center items-center gap-4 mt-10">

                                        {/* Previous */}
                                        <button
                                            disabled={pagination.currentPage === 1}
                                            onClick={() => handlePageChange(pagination.currentPage - 1)}
                                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
                                        >
                                            ◀ Trước
                                        </button>

                                        {/* Current Page */}
                                        <span className="px-4 py-2 text-lg font-medium">
                                            Trang {pagination.currentPage} / {pagination.totalPages}
                                        </span>

                                        {/* Next */}
                                        <button
                                            disabled={pagination.currentPage === pagination.totalPages}
                                            onClick={() => handlePageChange(pagination.currentPage + 1)}
                                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
                                        >
                                            Sau ▶
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
}