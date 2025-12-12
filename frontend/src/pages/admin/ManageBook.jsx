import { useEffect, useState } from "react";
import {
    getAllBooksAdminAPI,
    createBookAPI,
    updateBookAPI,
    removeBookAPI,
    getAllCategoriesAPI,
} from "../../api/admin";

export default function ManageBook() {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [editBookId, setEditBookId] = useState(null);
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        publisher: "",
        price: "",
        stock: "",
        category_id: "",
        description: "",
        cover: null,
        gallery: [],
        existingCover: null,
        existingGallery: [],
    });

    const limit = 4;
    const localhostUrl = "http://localhost:8080";

    // ----- FETCH BOOKS -----
    const fetchBooks = async (page = currentPage) => {
        setLoading(true);
        setError("");
        try {
            const res = await getAllBooksAdminAPI(page, limit);
            const { books, pagination } = res.data;
            const totalPagesFromApi = pagination.totalPages;

            let validPage = page > totalPagesFromApi ? totalPagesFromApi : page;

            setBooks(books);
            setCurrentPage(validPage);
            setTotalPages(totalPagesFromApi);

            // Nếu validPage thay đổi, fetch lại
            if (validPage !== page) {
                fetchBooks(validPage);
            }
        } catch (err) {
            console.error(err);
            setError(err.message || "Lấy danh sách sách thất bại");
        } finally {
            setLoading(false);
        }
    };

    // ----- FETCH CATEGORIES -----
    const fetchCategories = async () => {
        try {
            const res = await getAllCategoriesAPI(1, 100);
            setCategories(res.data.categories);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchBooks(currentPage);
        fetchCategories();
    }, [currentPage]);

    // ----- PAGINATION -----
    const handlePrev = () => currentPage > 1 && setCurrentPage(prev => prev - 1);
    const handleNext = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);

    // ----- OPEN MODAL -----
    const openModal = (book = null) => {
        if (book) {
            setEditBookId(book.book_id);
            const cover = book.Images.find(img => img.image_type === "cover") || null;
            const gallery = book.Images.filter(img => img.image_type !== "cover") || [];
            setBookData({
                title: book.title,
                author: book.author,
                publisher: book.publisher,
                price: book.price,
                stock: book.stock,
                category_id: book.category_id,
                description: book.description,
                cover: null,
                gallery: [],
                existingCover: cover,
                existingGallery: gallery,
            });
        } else {
            setEditBookId(null);
            setBookData({
                title: "",
                author: "",
                publisher: "",
                price: "",
                stock: "",
                category_id: "",
                description: "",
                cover: null,
                gallery: [],
                existingCover: null,
                existingGallery: [],
            });
        }
        setShowModal(true);
    };

    // ----- HANDLE CHANGE -----
    const handleChange = (e) => {
        const { name, files, value } = e.target;
        if (files) {
            if (name === "cover") setBookData(prev => ({ ...prev, cover: files[0] }));
            else if (name === "gallery") setBookData(prev => ({ ...prev, gallery: [...prev.gallery, ...files] }));
        } else {
            setBookData(prev => ({ ...prev, [name]: value }));
        }
    };

    // ----- HANDLE SUBMIT -----
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!bookData.title) return alert("Tên sách không được để trống");

        const formData = new FormData();
        for (let key in bookData) {
            if (key === "gallery") bookData.gallery.forEach(file => formData.append("gallery", file));
            else if (bookData[key] !== null && bookData[key] !== undefined && key !== "existingCover" && key !== "existingGallery") {
                formData.append(key, bookData[key]);
            }
        }

        try {
            if (editBookId) await updateBookAPI(editBookId, formData);
            else await createBookAPI(formData);

            setShowModal(false);
            fetchBooks(currentPage);
        } catch (err) {
            alert(err.message || "Có lỗi xảy ra");
        }
    };

    // ----- HANDLE DELETE -----
    const handleDelete = async (book_id) => {
        if (!window.confirm("Bạn có chắc muốn xóa sách này?")) return;

        try {
            await removeBookAPI(book_id);

            // Xử lý trang cuối trống
            const newBooksCount = books.length - 1;
            const nextPage = newBooksCount === 0 && currentPage > 1 ? currentPage - 1 : currentPage;
            fetchBooks(nextPage);
        } catch (err) {
            alert(err.message || "Xóa sách thất bại");
        }
    };

    // ----- RENDER IMAGE -----
    const renderImage = (img) => {
        if (!img) return null;
        return img.storage_type === "local" ? `${localhostUrl}${img.image_url}` : img.image_url;
    };

    return (
        <div className="p-4 min-h-screen flex flex-col bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Quản lý sách</h2>

            <div className="mb-4">
                <button
                    onClick={() => openModal()}
                    className="px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:from-green-500 hover:to-green-700 transition"
                >
                    Thêm sách
                </button>
            </div>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <div className="flex-1 flex flex-col bg-white rounded-lg shadow-md overflow-hidden select-none">
                    <div className="overflow-x-auto overflow-y-auto flex-1">
                        <table className="w-full min-w-[900px] border border-gray-300 rounded">
                            <thead className="bg-indigo-100 sticky top-0 z-10">
                                <tr>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Cover</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Tiêu đề</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Tác giả</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Nhà XB</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Giá</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Số lượng</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Danh mục</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Ngày tạo</th>
                                    <th className="border px-4 py-2 text-left text-indigo-700">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((b, idx) => (
                                    <tr key={idx} className="even:bg-gray-50 hover:bg-indigo-50 transition-colors">
                                        <td className="border px-4 py-2 w-20 h-20 flex justify-center items-center">
                                            {b.Images?.[0]?.image_url ? (
                                                <img src={renderImage(b.Images[0])} alt={b.title} className="object-cover w-16 h-16 border rounded" />
                                            ) : (
                                                <div className="w-16 h-16 bg-gray-200 rounded border" />
                                            )}
                                        </td>
                                        <td className="border px-4 py-2">{b.title}</td>
                                        <td className="border px-4 py-2">{b.author}</td>
                                        <td className="border px-4 py-2">{b.publisher}</td>
                                        <td className="border px-4 py-2">{b.price}</td>
                                        <td className="border px-4 py-2">{b.stock}</td>
                                        <td className="border px-4 py-2">{b.Category?.name}</td>
                                        <td className="border px-4 py-2">{new Date(b.createdAt).toLocaleDateString()}</td>
                                        <td className="border px-4 py-2 flex gap-2">
                                            <button onClick={() => openModal(b)} className="px-3 py-1 bg-yellow-400 text-white font-semibold rounded shadow hover:bg-yellow-500 hover:shadow-lg transition">Sửa</button>
                                            <button onClick={() => handleDelete(b.book_id)} className="px-3 py-1 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 hover:shadow-lg transition">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                                {books.length === 0 && (
                                    <tr>
                                        <td colSpan={9} className="text-center py-6 text-gray-400">Không có dữ liệu</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-auto flex justify-center items-center gap-4 py-4 bg-indigo-50 border-t border-indigo-200 shadow-inner rounded-b">
                        <button disabled={currentPage === 1} onClick={handlePrev} className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300 disabled:opacity-50 transition">◀ Trước</button>
                        <span className="px-4 py-2 text-lg font-medium text-indigo-700">Trang {currentPage} / {totalPages}</span>
                        <button disabled={currentPage === totalPages} onClick={handleNext} className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300 disabled:opacity-50 transition">Sau ▶</button>
                    </div>
                </div>
            )}

            {/* Modal thêm/sửa */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4">{editBookId ? "Sửa sách" : "Thêm sách"}</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input type="text" name="title" placeholder="Tiêu đề" value={bookData.title} onChange={handleChange} className="border px-3 py-2 rounded w-full" required />
                            <input type="text" name="author" placeholder="Tác giả" value={bookData.author} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
                            <input type="text" name="publisher" placeholder="Nhà XB" value={bookData.publisher} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
                            <input type="number" name="price" placeholder="Giá" value={bookData.price} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
                            <input type="number" name="stock" placeholder="Số lượng" value={bookData.stock} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
                            <select name="category_id" value={bookData.category_id} onChange={handleChange} className="border px-3 py-2 rounded w-full">
                                <option value="">Chọn danh mục</option>
                                {categories.map(c => <option key={c.category_id} value={c.category_id}>{c.name}</option>)}
                            </select>
                            <textarea name="description" placeholder="Mô tả" value={bookData.description} onChange={handleChange} className="border px-3 py-2 rounded w-full resize-none" rows={3} />

                            {/* Cover */}
                            <label className="font-medium">Ảnh chính</label>
                            <div className="flex items-center gap-2 mb-2">
                                {bookData.cover ? (
                                    <div className="relative w-24 h-24 border rounded overflow-hidden shadow">
                                        <img src={URL.createObjectURL(bookData.cover)} alt="preview cover" className="object-cover w-full h-full" />
                                        <button type="button" onClick={() => setBookData(prev => ({ ...prev, cover: null }))} className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-700 transition">×</button>
                                    </div>
                                ) : editBookId && bookData.existingCover ? (
                                    <div className="w-24 h-24 border rounded overflow-hidden shadow">
                                        <img src={renderImage(bookData.existingCover)} alt="cover hiện tại" className="object-cover w-full h-full" />
                                    </div>
                                ) : null}

                                <label className="px-4 py-2 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600 transition">
                                    {bookData.cover ? "Đổi ảnh" : "Chọn ảnh"}
                                    <input type="file" name="cover" accept="image/*" onChange={handleChange} className="hidden" />
                                </label>
                            </div>

                            {/* Gallery */}
                            <label className="font-medium">Ảnh phụ</label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {editBookId && bookData.existingGallery.map((img, idx) => (
                                    <div key={idx} className="w-16 h-16 border rounded overflow-hidden shadow">
                                        <img src={renderImage(img)} alt="gallery hiện tại" className="object-cover w-full h-full" />
                                    </div>
                                ))}
                                {bookData.gallery.map((file, idx) => (
                                    <div key={idx} className="relative w-16 h-16 border rounded overflow-hidden shadow">
                                        <img src={URL.createObjectURL(file)} alt="preview" className="object-cover w-full h-full" />
                                        <button type="button" onClick={() => setBookData(prev => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== idx) }))} className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center shadow hover:bg-red-700 transition">×</button>
                                    </div>
                                ))}
                                <label className="px-4 py-2 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600 transition flex items-center">
                                    Chọn ảnh
                                    <input type="file" name="gallery" accept="image/*" multiple onChange={handleChange} className="hidden" />
                                </label>
                            </div>

                            <div className="flex justify-end gap-2 mt-2">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Hủy</button>
                                <button type="submit" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded hover:shadow-lg transition">{editBookId ? "Cập nhật" : "Thêm"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
