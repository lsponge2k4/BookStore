import { useEffect, useState } from "react";
import { getAllUsersAPI } from "../../api/admin";

export default function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const limit = 10;

    const fetchUsers = async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const res = await getAllUsersAPI(page, limit);
            setUsers(res.data.users);
            setCurrentPage(res.data.pagination.currentPage);
            setTotalPages(res.data.pagination.totalPages);
        } catch (err) {
            console.error(err);
            setError(err.message || "Có lỗi xảy ra khi lấy danh sách người dùng");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="p-4 min-h-screen flex flex-col bg-gray-100 select-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Quản lý người dùng</h2>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Table scroll */}
                    <div className="overflow-x-auto overflow-y-auto flex-1">
                        <table className="w-full min-w-[600px] border border-gray-200 rounded">
                            <thead className="bg-gradient-to-r from-indigo-100 to-indigo-50 sticky top-0 z-10">
                                <tr>
                                    <th className="border-b border-gray-300 px-4 py-2 text-left text-indigo-800 font-semibold">Tên</th>
                                    <th className="border-b border-gray-300 px-4 py-2 text-left text-indigo-800 font-semibold">Email</th>
                                    <th className="border-b border-gray-300 px-4 py-2 text-left text-indigo-800 font-semibold">Vai trò</th>
                                    <th className="border-b border-gray-300 px-4 py-2 text-left text-indigo-800 font-semibold">Ngày tạo</th>
                                </tr>
                            </thead>
                            <tbody className="min-h-[12rem]">
                                {users.map((user, idx) => (
                                    <tr
                                        key={idx}
                                        className={`transition-colors ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-indigo-50`}
                                    >
                                        <td className="border-b border-gray-200 px-4 py-2">{user.name}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{user.email}</td>
                                        <td className="border-b border-gray-200 px-4 py-2 capitalize">{user.role}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center py-6 text-gray-400">
                                            Không có dữ liệu
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination cố định */}
                    <div className="mt-auto flex justify-center items-center gap-4 py-4 bg-gradient-to-r from-indigo-50 to-indigo-100 border-t border-indigo-200 shadow-inner rounded-b-xl">
                        <button
                            disabled={currentPage === 1}
                            onClick={handlePrev}
                            className="px-4 py-2 bg-indigo-300 text-indigo-900 rounded-lg hover:bg-indigo-400 disabled:opacity-50 font-medium transition"
                        >
                            ◀ Trước
                        </button>

                        <span className="px-4 py-2 text-lg font-medium text-indigo-800">
                            Trang {currentPage} / {totalPages}
                        </span>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-300 text-indigo-900 rounded-lg hover:bg-indigo-400 disabled:opacity-50 font-medium transition"
                        >
                            Sau ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
