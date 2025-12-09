import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    return (
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logob.jpg" alt="Cửa Hàng Sách" className="h-12 md:h-14 w-auto object-contain"></img>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 hidden sm:block">Cửa Hàng Sách</span>
                </Link>
            </div>
        </header>
    );
}
