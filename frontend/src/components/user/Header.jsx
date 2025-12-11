import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
    const { user, logout, fetchUserInfo } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropdown]);
    // Lấy thông tin user đầy đủ (avatar)
    useEffect(() => {
        if (user) {
            fetchUserInfo().then(info => setUserInfo(info));
        }
    }, [user]);
    return (
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm select-none">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logob.jpg" alt="Cửa Hàng Sách" className="h-12 md:h-14 w-auto object-contain"></img>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 hidden sm:block">Cửa Hàng Sách</span>
                </Link>
                {/* Nav */}
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition">Trang chủ</Link>
                    <Link to="/popularBook" className="text-gray-700 hover:text-orange-500 font-medium transition">Nổi bật</Link>
                    <Link to="/location" className="text-gray-700 hover:text-orange-500 font-medium transition">Địa điểm</Link>
                    <Link to="/information" className="text-gray-700 hover:text-orange-500 font-medium transition">Thông tin</Link>
                </nav>
                {/* Tìm kiếm + Giỏ Hàng + Icon */}
                <div className="flex items-center gap-8">
                    {/* Tìm kiếm */}
                    <form>
                        <input
                            type="text"
                            placeholder="Tìm sách..."
                            className="w-48 md:w-64 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        />
                        <button type="submit" className="absolute text-gray-700 right-50 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-orange-500">
                            <svg className="w-6 h-6 " fill="None" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                    {/* Giỏ hàng */}
                    <Link to="/" className="relative group pl-4 " tittle="Giỏ hàng">
                        <svg
                            className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute -top-2.5 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                            3
                        </span>
                    </Link>
                    {/* Icon */}
                    <div className="relative" ref={dropdownRef} >
                        {user && user.role == "customer" ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center font-bold hover:bg-orange-500 transition"
                                    style={{ backgroundColor: !userInfo?.avatar ? '#4F46E5' : 'transparent' }}
                                >
                                    {userInfo?.avatar ? (
                                        <img
                                            src={`http://localhost:8080${userInfo.avatar}`}
                                            alt="Avatar"
                                            className="w-10 h-10 object-cover"
                                        />
                                    ) : (
                                        // <span className="text-white">{user.name?.charAt(0).toUpperCase() || "U"}</span>
                                        <h1></h1>
                                    )}
                                </button>
                                {/*  DropDown */}
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-lg z-50">
                                        <div className="px-4 py-3 bg-gray-50 border-b">
                                            <p className="font-semibold text-indigo-700 truncate">
                                                {user.name}
                                            </p>
                                            <p className="text-sm text-gray-600 truncate">
                                                {user.email}
                                            </p>
                                        </div>
                                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setShowDropdown(false)}>Thông tin cá nhân</Link>
                                        <Link to="/changePassword" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setShowDropdown(false)}>Đổi mật khẩu</Link>
                                        <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => { logout(); setShowDropdown(false) }}>Đăng xuất</Link>
                                    </div>


                                )}
                            </div>

                        ) : (<div className="relative">

                            <Link to="/login" className="bg-indigo-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition" > Đăng Nhập </Link>
                        </div>
                        )
                        }
                    </div>

                </div>
            </div>
        </header>
    );
}
