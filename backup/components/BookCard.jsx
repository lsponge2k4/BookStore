// src/components/BookCard.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import LoginModal from './LoginModal';

const BACKEND_URL = 'http://localhost:8080';

export default function BookCard({ book }) {
    const { user } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const [pendingBook, setPendingBook] = useState(null); // Lưu sách đang chờ thêm

    const coverImage = book.Images?.[0]
        ? `${BACKEND_URL}${book.Images[0].image_url}`
        : '/book_default.jpg';

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (!user) {
            setPendingBook(book); // Lưu lại sách
            setShowLogin(true);
        } else {
            addToCart(book);
        }
    };

    const addToCart = (bookToAdd) => {
        alert(`Đã thêm "${bookToAdd.title}" vào giỏ hàng!`);
        // TODO: Gọi API thêm vào cart
    };

    const handleLoginSuccess = () => {
        if (pendingBook) {
            addToCart(pendingBook); // Thêm sách sau khi login
            setPendingBook(null);
        }
    };
    const avgRating = book.Reviews?.length > 0
        ? (book.Reviews.reduce((sum, r) => sum + r.rating, 0) / book.Reviews.length).toFixed(1)
        : 0;
    return (
        <>
            <Link to={`/book/${book.book_id}`} className="block">
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
                    <div className="relative">
                        <img
                            src={coverImage}
                            alt={book.title}
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        {/* {book.sale && (
                            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                Sale
                            </span>
                        )} */}
                    </div>
                    <div className="p-3">
                        <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">by {book.author}</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-500"> {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < Math.floor(avgRating) ? '' : 'opacity-30'}>⭐</span>
                            ))}</span>
                            <span className="text-xs text-gray-500">{avgRating} ({book.Reviews?.length || 0})</span>
                        </div>
                        {/*<div className="flex items-center gap-2 mt-3">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < Math.floor(avgRating) ? '' : 'opacity-30'}>⭐</span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">
                                {avgRating} ({book.Reviews?.length || 0})
                            </span>
                        </div> */}
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xl font-bold">${parseFloat(book.price).toFixed(2)}</span>
                            <button
                                onClick={handleAddToCart}
                                className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition"
                            >
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            </Link>

            {showLogin && (
                <LoginModal
                    onClose={() => {
                        setShowLogin(false);
                        setPendingBook(null);
                    }}
                    onSuccess={handleLoginSuccess}
                />
            )}
        </>
    );
}