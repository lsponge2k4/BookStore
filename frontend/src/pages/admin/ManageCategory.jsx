import { useEffect, useState } from "react";
import {
    getAllCategoriesAPI,
    createCategoryAPI,
    updateCategoryAPI,
    deleteCategoryAPI,
} from "../../api/admin";

export default function ManageCategory() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);
    const [editCategoryId, setEditCategoryId] = useState(null);

    const limit = 5;

    // Fetch categories
    const fetchCategories = async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const res = await getAllCategoriesAPI(page, limit);
            setCategories(res.data.categories);
            setCurrentPage(res.data.page);
            setTotalPages(res.data.totalPages);
        } catch (err) {
            console.error(err);
            setError(err.message || "Lấy danh sách danh mục thất bại");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories(currentPage);
    }, [currentPage]);

    const handlePrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
    const handleNext = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);

    const openModal = (category = null) => {
        if (category) {
            setEditCategoryId(category.category_id);
            setCategoryName(category.name);
            setCategoryImage(null);
        } else {
            setEditCategoryId(null);
            setCategoryName("");
            setCategoryImage(null);
        }
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryName) return alert("Tên danh mục không được để trống");

        const formData = new FormData();
        formData.append("name", categoryName);
        if (categoryImage) formData.append("image", categoryImage);
        if (editCategoryId) formData.append("category_id", editCategoryId);

        try {
            if (editCategoryId) {
                await updateCategoryAPI(formData);
            } else {
                await createCategoryAPI(formData);
            }
            setShowModal(false);
            fetchCategories(currentPage);
        } catch (err) {
            alert(err.message || "Có lỗi xảy ra");
        }
    };

    return (
        <div className="p-4 min-h-screen flex flex-col bg-gray-100 select-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Quản lý danh mục
            </h2>

            <div className="mb-4">
                <button
                    onClick={() => openModal()}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded hover:shadow-lg transition"
                >
                    Thêm danh mục
                </button>
            </div>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto overflow-y-auto flex-1">
                        <table className="w-full min-w-[600px] border border-gray-300 rounded">
                            <thead className="bg-indigo-100 sticky top-0 z-10">
                                <tr>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Hình ảnh</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Tên danh mục</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Ngày tạo</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="min-h-[12rem]">
                                {categories.map((cat, idx) => (
                                    <tr key={idx} className="even:bg-gray-50 hover:bg-indigo-50 transition-colors">
                                        <td className="border px-4 py-2">
                                            {cat.Images?.[0]?.image_url ? (
                                                <img
                                                    src={`http://localhost:8080${cat.Images[0].image_url}`}
                                                    alt={cat.name}
                                                    className="w-16 h-16 object-cover rounded shadow"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 bg-gray-200 rounded" />
                                            )}
                                        </td>
                                        <td className="border px-4 py-2">{cat.name}</td>
                                        <td className="border px-4 py-2">
                                            {new Date(cat.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="border px-4 py-2 space-x-2">
                                            <button
                                                onClick={() => openModal(cat)}
                                                className="px-3 py-1 bg-yellow-400 text-white font-semibold rounded shadow hover:bg-yellow-500 hover:shadow-lg transition"
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                onClick={() => handleDelete(cat.category_id)}
                                                className="px-3 py-1 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 hover:shadow-lg transition"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {categories.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center py-6 text-gray-400">
                                            Không có dữ liệu
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-auto flex justify-center items-center gap-4 py-4 bg-indigo-50 border-t border-indigo-200 shadow-inner rounded-b">
                        <button
                            disabled={currentPage === 1}
                            onClick={handlePrev}
                            className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300 disabled:opacity-50 transition"
                        >
                            ◀ Trước
                        </button>
                        <span className="px-4 py-2 text-lg font-medium text-indigo-700">
                            Trang {currentPage} / {totalPages}
                        </span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={handleNext}
                            className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300 disabled:opacity-50 transition"
                        >
                            Sau ▶
                        </button>
                    </div>
                </div>
            )}

            {/* Modal thêm/sửa */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">
                            {editCategoryId ? "Sửa danh mục" : "Thêm danh mục"}
                        </h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Tên danh mục"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                className="border px-3 py-2 rounded w-full"
                                required
                            />

                            {/* Nút chọn ảnh đồng bộ xanh dương */}
                            <div className="flex items-center gap-2">
                                {categoryImage && (
                                    <div className="relative w-24 h-24 border rounded overflow-hidden shadow">
                                        <img src={URL.createObjectURL(categoryImage)} alt="preview" className="object-cover w-full h-full" />
                                        <button
                                            type="button"
                                            onClick={() => setCategoryImage(null)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-red-700 transition"
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                                <label className="px-4 py-2 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600 transition">
                                    {categoryImage ? "Đổi ảnh" : "Chọn ảnh"}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setCategoryImage(e.target.files[0])}
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                                >
                                    {editCategoryId ? "Cập nhật" : "Thêm"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
