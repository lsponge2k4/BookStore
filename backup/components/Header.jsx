// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleSearch = (e) => {
        e.preventDefault();
        const q = searchQuery.trim();
        if (!q) return;
        navigate(`/search?q=${encodeURIComponent(q)}`);
        setSearchQuery('');
    };

    return (
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logob.jpg" alt="Book Store" className="h-12 md:h-14 w-auto object-contain" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 hidden sm:block">
                        Book Store
                    </span>
                </Link>

                {/* Nav */}
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</Link>
                    <Link to="/popular" className="text-gray-700 hover:text-indigo-600 font-medium transition">Popular</Link>
                    <Link to="/location" className="text-gray-700 hover:text-indigo-600 font-medium transition">Location</Link>
                    <Link to="/info" className="text-gray-700 hover:text-indigo-600 font-medium transition">Information</Link>
                </nav>

                {/* Search + Cart + User Info */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tìm sách, tác giả..."
                            className="w-48 md:w-64 pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                        <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-indigo-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>

                    {/* Cart */}
                    <Link to="/cart" className="relative group" title="Giỏ hàng">
                        {/* Icon giỏ hàng */}
                        <svg
                            className="w-7 h-7 text-gray-700 group-hover:text-indigo-600 transition"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>

                        {/* Badge số lượng */}
                        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                            0
                        </span>
                    </Link>

                    {/* USER INFO ICON */}
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-indigo-700 transition relative group"
                                title={user.email}
                            >
                                i
                                {/* Tooltip nhỏ khi hover */}
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                    {user.email}
                                </span>
                            </button>

                            {/* DROPDOWN */}
                            {showDropdown && user.role === 'customer' && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border overflow-hidden z-50">
                                    {/* Tên người dùng */}
                                    <div className="px-4 py-3 bg-indigo-50 border-b">
                                        <p className="text-sm font-semibold text-indigo-700 truncate">
                                            {user.name || user.email.split('@')[0]}
                                        </p>
                                        <p className="text-xs text-gray-600 truncate">{user.email}</p>
                                    </div>

                                    {/* Các tab */}
                                    <Link
                                        to="#"// to="/profile/info"
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                                        onClick={() => setShowDropdown(false)}
                                    >
                                        Thông tin cá nhân
                                    </Link>
                                    <Link
                                        to="#"// to="/profile/change-password"
                                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                                        onClick={() => setShowDropdown(false)}
                                    >
                                        Đổi mật khẩu
                                    </Link>

                                    <hr className="my-1" />

                                    <button
                                        onClick={() => {
                                            logout();
                                            setShowDropdown(false);
                                        }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/#"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
                        >
                            Đăng Nhập
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}