import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
export default function Sidebar() {
    const navigate = useNavigate();
    const { userInfo, fetchUserInfo } = useAuth();
    useEffect(() => {
        fetchUserInfo();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="w-64 bg-gray-900 text-gray-200 min-h-screen p-4 shadow-lg flex flex-col justify-between select-none">

            {/* Nội dung trên */}
            <div>
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={
                            userInfo?.avatar
                                ? `http://localhost:8080${userInfo.avatar}`
                                : "https://i.pravatar.cc/100"
                        }
                        alt="avatar"
                        className="w-20 h-20 rounded-full border-2 border-orange-300 object-cover"
                    />

                    <h3 className="text-lg font-semibold mt-2">
                        {userInfo?.name || "Admin"}
                    </h3>

                    <p className="text-sm text-gray-400">
                        {userInfo?.role === "admin" ? "Quản trị viên" : "Người dùng"}
                    </p>
                </div>

                {/* Menu */}
                <nav className="space-y-2">
                    <Link
                        to="/admin"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Thông tin Admin
                    </Link>

                    <Link
                        to="/admin/changePassword"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Đổi mật khẩu
                    </Link>

                    <hr className="border-gray-700 my-3" />

                    <Link
                        to="/admin/manageUsers"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Quản lý người dùng
                    </Link>

                    <Link
                        to="/admin/manageCategory"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Quản lý danh mục
                    </Link>

                    <Link
                        to="/admin/manageBook"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Quản lý sách
                    </Link>

                    <Link
                        to="/admin/manageProduct"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Quản lý đơn hàng
                    </Link>

                    <Link
                        to="/admin/manageThongKe"
                        className="block p-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Thống kê
                    </Link>
                </nav>
            </div>

            {/* Nút đăng xuất */}
            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="w-full p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
                >
                    Đăng xuất
                </button>
            </div>

        </div>
    );
}
