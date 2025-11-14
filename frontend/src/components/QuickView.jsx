// src/components/QuickView.jsx
import { Link } from 'react-router-dom';
import { BACKEND } from '../api/api';

export default function QuickView({ book, onClose }) {
    if (!book) return null;

    const cover = book.Images?.[0]
        ? `${BACKEND}${book.Images[0].image_url}`
        : '/placeholder.jpg';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative max-h-screen overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
                >
                    ×
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                    <img
                        src={cover}
                        alt={book.title}
                        className="w-full h-80 object-cover rounded"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">{book.title}</h2>
                        <p className="text-gray-600">by {book.author}</p>
                        <div className="flex items-center gap-1 mt-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-sm text-gray-500">(4.7)</span>
                        </div>
                        <p className="text-3xl font-bold mt-4">
                            ${parseFloat(book.price).toFixed(2)}
                        </p>
                        <p className="mt-3 text-gray-700">
                            {book.description?.slice(0, 150)}...
                        </p>

                        <div className="flex gap-3 mt-6">
                            <button className="flex-1 bg-indigo-600 text-white py-2 rounded">
                                Add to Cart
                            </button>
                            <Link
                                to={`/book/${book.book_id}`}
                                className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded text-center"
                            >
                                View Full Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}