// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { getBooks, getBookById } from '../api/api';
import BookCard from '../components/BookCard';
import QuickView from '../components/QuickView';
import Pagination from '../components/Pagination';
import BannerCarousel from '../components/BannerCarousel';
import Footer from '../components/Footer';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [quickBook, setQuickBook] = useState(null);
    const limit = 10;

    const loadBooks = async (p) => {
        setLoading(true);
        try {
            const result = await getBooks(p, limit);
            setBooks(result.books || []);
            setTotal(result.total || 0);
            setPage(result.page || p);
        } catch (err) {
            console.error('Lỗi tải sách:', err);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBooks(page);
    }, [page]);

    const openQuickView = async (book) => {
        try {
            const full = await getBookById(book.book_id);
            setQuickBook(full);
        } catch (err) {
            console.warn('Quick view lỗi, dùng dữ liệu hiện có');
            setQuickBook(book);
        }
    };
    return (
        <div className="flex flex-col min-h-screen">
            <BannerCarousel />
            <main className="flex-grow">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 tracking-tight">
                        Sách Thịnh Hành
                    </h2>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                        </div>
                    ) : books.length === 0 ? (
                        <p className="text-center text-gray-500 py-10">Không có sách nào.</p>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {books.map((book) => (
                                    <BookCard key={book.book_id} book={book} onQuickView={openQuickView} />
                                ))}
                            </div>
                            <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
                        </>
                    )}
                </section>
            </main>
            <Footer />
            {quickBook && <QuickView book={quickBook} onClose={() => setQuickBook(null)} />}
        </div>
    );
}