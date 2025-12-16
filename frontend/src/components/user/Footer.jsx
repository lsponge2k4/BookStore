import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="/logob.jpg"
                            alt="Book Store"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                        <span className="text-xl md:text-2xl font-bold">Cửa Hàng Sách</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Sách mang lại tri thức cho bạn.
                    </p>
                    <Link
                        to="/privacy-policy"
                        className="text-gray-400 text-sm hover:text-orange-500 font-medium transition"
                    >
                        Chính sách bảo mật
                    </Link>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Các đường dẫn</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white transition">
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link to="/popularBook" className="hover:text-white transition">
                                Nổi bật
                            </Link>
                        </li>
                        <li>
                            <Link to="/location" className="hover:text-white transition">
                                Địa điểm
                            </Link>
                        </li>
                        <li>
                            <Link to="/information" className="hover:text-white transition">
                                Thông tin
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Liên hệ chúng tôi</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex items-center gap-2">
                            Email: phamhoangvipro@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            Số điện thoại: +84 0373 972 462
                        </li>
                        <li className="flex items-center gap-2">
                            Địa chỉ: 64 Trần Quốc Vượng, Hà Nội, Việt Nam
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Mạng xã hội</h3>
                    <div className="flex gap-4">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/pham.hoang.296350"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition group"
                            title="Facebook"
                        >
                            <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>

                        {/* Twitter / X */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition group"
                            title="Twitter"
                        >
                            <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition group"
                            title="Instagram"
                        >
                            <svg className="w-5 h-5 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.696.272.272 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © Bản quyển trang Web thuộc về Phạm Bá Hoàng.
            </div>
        </footer>
    );
}
