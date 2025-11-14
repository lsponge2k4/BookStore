// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/hello")
//       .then((res) => res.json())
//       .then((result) => setData(result.message))
//       .catch((err) => console.error("Lỗi kết nối API:", err));
//   }, []);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>React + Express Demo 🚀</h1>
//       <p>{data ? data : "Đang tải dữ liệu từ backend..."}</p>
//     </div>
//   );
// }

// export default App;

// getAllBooks
// import { useEffect, useState } from "react";

// function App() {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Gọi API BE lấy sách
//         fetch("http://localhost:8080/api/home/getAllBook/public?page=1&limit=5")
//             .then((res) => res.json())
//             .then((result) => {
//                 setBooks(result.data?.books || []);
//                 console.error("Lỗi kết nối API:", books);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Lỗi kết nối API:", err);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//                 <h1>React + Express Demo 🚀</h1>
//                 <p>Đang tải dữ liệu từ backend...</p>
//             </div>
//         );
//     }

//     return (
//         <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//             <h1>Danh sách sách 🚀</h1>
//             {books.length === 0 && <p>Chưa có sách nào</p>}
//             {books.map((book) => {
//                 const cover = book.Images?.find((img) => img.image_type === "cover");
//                 const gallery = book.Images?.filter(
//                     (img) => img.image_type === "gallery"
//                 );

//                 return (
//                     <div
//                         key={book.book_id}
//                         style={{
//                             border: "1px solid #ccc",
//                             padding: "1rem",
//                             marginBottom: "1rem",
//                         }}
//                     >
//                         <h2>{book.title}</h2>
//                         <p>Author: {book.author}</p>
//                         <p>Price: {book.price}</p>

//                         {/* Cover */}
//                         {cover && (
//                             <img
//                                 src={`http://localhost:8080${cover.image_url}`}
//                                 alt="Cover"
//                                 style={{ width: "200px", display: "block", marginBottom: "0.5rem" }}
//                             />
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default App;


// get book by id
// import { useState } from "react";

// function App() {
//     const [bookId, setBookId] = useState("");
//     const [book, setBook] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const getBook = async () => {
//         if (!bookId) {
//             setError("Nhập book_id");
//             return;
//         }

//         setError("");
//         setBook(null);
//         setLoading(true);

//         try {
//             const res = await fetch(
//                 `http://localhost:8080/api/home/getBookById?book_id=${bookId}`
//             );
//             const data = await res.json();

//             if (!data.success) {
//                 setError(data.message || "Lỗi server");
//                 setLoading(false);
//                 return;
//             }

//             setBook(data.data);
//             setLoading(false);
//         } catch (err) {
//             console.error("Lỗi kết nối API:", err);
//             setError("Lỗi kết nối server");
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return (
//             <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//                 <h1>React + Express Demo 🚀</h1>
//                 <p>Đang tải dữ liệu từ backend...</p>
//             </div>
//         );
//     }

//     return (
//         <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//             <h1>Lấy sách theo ID 🚀</h1>

//             <div style={{ marginBottom: "1rem" }}>
//                 <input
//                     type="number"
//                     value={bookId}
//                     onChange={(e) => setBookId(e.target.value)}
//                     placeholder="Nhập book_id"
//                     style={{ padding: "0.5rem", marginRight: "0.5rem" }}
//                 />
//                 <button onClick={getBook} style={{ padding: "0.5rem 1rem" }}>
//                     Lấy sách
//                 </button>
//             </div>

//             {error && <p style={{ color: "red" }}>{error}</p>}

//             {book && (
//                 <div
//                     style={{
//                         border: "1px solid #ccc",
//                         padding: "1rem",
//                         marginBottom: "1rem",
//                     }}
//                 >
//                     <h2>{book.title}</h2>
//                     <p><strong>Author:</strong> {book.author || "-"}</p>
//                     <p><strong>Publisher:</strong> {book.publisher || "-"}</p>
//                     <p><strong>Price:</strong> {book.price}</p>
//                     <p><strong>Stock:</strong> {book.stock}</p>
//                     <p><strong>Category:</strong> {book.Category?.name || "-"}</p>
//                     <p><strong>Description:</strong> {book.description || "-"}</p>

//                     {/* Cover */}
//                     {book.Images?.length > 0 &&
//                         book.Images.filter((img) => img.image_type === "cover").map((cover) => (
//                             <img
//                                 key={cover.image_id}
//                                 src={`http://localhost:8080${cover.image_url}`}
//                                 alt="Cover"
//                                 style={{ width: "200px", display: "block", marginBottom: "0.5rem" }}
//                             />
//                         ))}

//                     {/* Gallery */}
//                     {book.Images?.length > 0 &&
//                         book.Images.filter((img) => img.image_type === "gallery").map((img) => (
//                             <img
//                                 key={img.image_id}
//                                 src={`http://localhost:8080${img.image_url}`}
//                                 alt="Gallery"
//                                 style={{
//                                     width: "150px",
//                                     display: "inline-block",
//                                     marginRight: "0.5rem",
//                                     marginBottom: "0.5rem",
//                                 }}
//                             />
//                         ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;


// get book by id details
// import { useState } from "react";

// function App() {
//     const [bookId, setBookId] = useState("");
//     const [bookData, setBookData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const [relatedBooks, setRelatedBooks] = useState([]);
//     const [relatedPage, setRelatedPage] = useState(1);
//     const relatedLimit = 5;

//     const getBookDetails = async () => {
//         if (!bookId) {
//             setError("Nhập book_id");
//             return;
//         }

//         setError("");
//         setBookData(null);
//         setRelatedBooks([]);
//         setRelatedPage(1);
//         setLoading(true);

//         try {
//             const res = await fetch(
//                 `http://localhost:8080/api/home/getBookDetails?id_book=${bookId}`
//             );
//             const data = await res.json();

//             if (!data.success) {
//                 setError(data.message || "Lỗi server");
//                 setLoading(false);
//                 return;
//             }

//             const book = data.data.book;
//             const allImages = book.Images || [];

//             const cover =
//                 allImages.find((img) => typeof img !== "string" && img.image_type === "cover")?.image_url ||
//                 allImages[0] ||
//                 "/image/books/covers/book_default.png";

//             const gallery = allImages
//                 .filter((img) => typeof img !== "string" && img.image_type === "gallery")
//                 .map((img) => img.image_url);

//             setBookData({
//                 ...data.data,
//                 book: { ...book, cover, gallery },
//             });

//             // Lấy sách cùng danh mục trang 1
//             if (book.category_id) {
//                 fetchRelatedBooks(book.category_id, book.book_id, 1);
//             }

//             setLoading(false);
//         } catch (err) {
//             console.error(err);
//             setError("Lỗi kết nối server");
//             setLoading(false);
//         }
//     };

//     const fetchRelatedBooks = async (categoryId, excludeBookId, page) => {
//         try {
//             const res = await fetch(
//                 `http://localhost:8080/api/home/getRelatedBooks?categoryId=${categoryId}&excludeBookId=${excludeBookId}&page=${page}&limit=${relatedLimit}`
//             );
//             const data = await res.json();

//             if (data.success) {
//                 setRelatedBooks(data.data.books);
//                 setRelatedPage(page);
//             } else {
//                 setError(data.message || "Lỗi khi lấy sách cùng danh mục");
//             }
//         } catch (err) {
//             console.error(err);
//             setError("Lỗi kết nối server");
//         }
//     };

//     return (
//         <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
//             <h1>Chi tiết sách 📚</h1>

//             {/* Input */}
//             <div style={{ marginBottom: "1rem" }}>
//                 <input
//                     type="number"
//                     value={bookId}
//                     onChange={(e) => setBookId(e.target.value)}
//                     placeholder="Nhập book_id"
//                     style={{ padding: "0.5rem", width: "60%", marginRight: "0.5rem" }}
//                 />
//                 <button onClick={getBookDetails} style={{ padding: "0.5rem 1rem" }}>
//                     Lấy sách
//                 </button>
//             </div>

//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {loading && <p>Đang tải...</p>}

//             {/* Hiển thị thông tin sách */}
//             {bookData?.book && (
//                 <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
//                     <h2>{bookData.book.title}</h2>
//                     <p><strong>Author:</strong> {bookData.book.author || "-"}</p>
//                     <p><strong>Publisher:</strong> {bookData.book.publisher || "-"}</p>
//                     <p><strong>Price:</strong> {bookData.book.price}</p>
//                     <p><strong>Stock:</strong> {bookData.book.stock}</p>
//                     <p><strong>Category:</strong> {bookData.book.Category?.name || "-"}</p>
//                     <p><strong>Description:</strong> {bookData.book.description || "-"}</p>

//                     {/* Cover */}
//                     <div style={{ marginTop: "0.5rem" }}>
//                         <h4>Cover</h4>
//                         <img src={`http://localhost:8080${bookData.book.cover}`} alt="Cover" style={{ width: 200 }} />
//                     </div>

//                     {/* Gallery */}
//                     <div style={{ marginTop: "0.5rem" }}>
//                         <h4>Gallery</h4>
//                         {bookData.book.gallery?.length > 0 ? (
//                             <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
//                                 {bookData.book.gallery.map((url, idx) => (
//                                     <img key={idx} src={`http://localhost:8080${url}`} alt={`Gallery-${idx}`} style={{ width: 120 }} />
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>Không có ảnh phụ</p>
//                         )}
//                     </div>

//                     {/* Reviews */}
//                     <div style={{ marginTop: "1rem" }}>
//                         <h3>Reviews</h3>
//                         {bookData.book.Reviews?.length > 0 ? (
//                             bookData.book.Reviews.map((rev) => (
//                                 <div key={rev.review_id} style={{ borderBottom: "1px solid #eee", marginBottom: "0.5rem" }}>
//                                     <p><strong>{rev.User?.name || "Anonymous"}:</strong> {rev.comment}</p>
//                                     <p>Rating: {rev.rating}/5</p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>Chưa có đánh giá</p>
//                         )}
//                     </div>

//                     {/* Related Books */}
//                     <div style={{ marginTop: "1rem" }}>
//                         <h3>Sách cùng danh mục</h3>
//                         {relatedBooks?.length > 0 ? (
//                             <div>
//                                 <div style={{ display: "flex", overflowX: "auto", gap: "0.5rem" }}>
//                                     {relatedBooks.map((b) => {
//                                         const coverUrl = b.Images?.length
//                                             ? (typeof b.Images[0] === "string" ? b.Images[0] : b.Images[0].image_url)
//                                             : "/image/books/covers/book_default.png";
//                                         return (
//                                             <div key={b.book_id} style={{ border: "1px solid #ccc", padding: "0.5rem", minWidth: "120px" }}>
//                                                 <p style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{b.title}</p>
//                                                 <img src={`http://localhost:8080${coverUrl}`} alt={b.title} style={{ width: "100%" }} />
//                                             </div>
//                                         );
//                                     })}
//                                 </div>

//                                 {/* Pagination Buttons */}
//                                 <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
//                                     <button
//                                         onClick={() => fetchRelatedBooks(bookData.book.category_id, bookData.book.book_id, relatedPage - 1)}
//                                         disabled={relatedPage <= 1}
//                                     >
//                                         {"<"}
//                                     </button>
//                                     <span>Page {relatedPage}</span>
//                                     <button
//                                         onClick={() => fetchRelatedBooks(bookData.book.category_id, bookData.book.book_id, relatedPage + 1)}
//                                         disabled={relatedBooks.length < relatedLimit}
//                                     >
//                                         {">"}
//                                     </button>
//                                 </div>
//                             </div>
//                         ) : (
//                             <p>Không có sách cùng danh mục</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;

// popular
// import React, { useEffect, useState } from "react";

// export default function SearchPage() {
//     const BASE_URL = "http://localhost:8080"; // ✅ Link server backend

//     const [filters, setFilters] = useState({
//         categoryId: "",
//         author: "",
//         publisher: "",
//         minPrice: "",
//         maxPrice: "",
//         sort: "desc",
//         page: 1,
//     });

//     const [options, setOptions] = useState({
//         authors: [],
//         publishers: [],
//         categories: [],
//         priceRange: { min_price: 0, max_price: 0 },
//     });

//     const [books, setBooks] = useState([]);
//     const [pagination, setPagination] = useState({ totalPages: 1, currentPage: 1 });
//     const [loading, setLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState(""); // ⚡ Thêm state để hiển thị lỗi

//     // ✅ Lấy danh sách bộ lọc
//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const res = await fetch(`${BASE_URL}/api/popular/getFilterOptions`);
//                 const data = await res.json();
//                 if (data.success) setOptions(data.data);
//             } catch (err) {
//                 console.error("Lỗi khi load filter options:", err);
//                 setErrorMsg("Không thể tải danh sách bộ lọc!");
//             }
//         };
//         fetchOptions();
//     }, []);

//     // ✅ Gọi API lấy danh sách sách theo filter
//     const fetchBooks = async (newFilters = filters) => {
//         setLoading(true);
//         setErrorMsg(""); // reset lỗi cũ
//         try {
//             const query = new URLSearchParams();
//             for (const key in newFilters) {
//                 if (newFilters[key] !== "" && newFilters[key] != null) {
//                     query.append(key, newFilters[key]);
//                 }
//             }

//             const res = await fetch(`${BASE_URL}/api/popular/getFilteredBook?${query.toString()}`);
//             const data = await res.json();

//             if (!res.ok) {
//                 // ⚡ Khi server trả về lỗi (VD: 400 Bad Request)
//                 setErrorMsg(data.message || "Yêu cầu không hợp lệ!");
//                 setBooks([]);
//                 return;
//             }

//             if (data.success) {
//                 setBooks(data.data.books);
//                 setPagination({
//                     totalPages: data.data.totalPages,
//                     currentPage: data.data.currentPage,
//                 });
//             } else {
//                 setErrorMsg(data.message || "Không thể tải sách.");
//             }
//         } catch (err) {
//             console.error("Lỗi khi fetch sách:", err);
//             setErrorMsg("Lỗi kết nối tới server!");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ✅ Khi bấm nút tìm kiếm
//     const handleSearch = () => {
//         setFilters({ ...filters, page: 1 });
//         fetchBooks({ ...filters, page: 1 });
//     };

//     // ✅ Chuyển trang
//     const handlePageChange = (newPage) => {
//         const updatedFilters = { ...filters, page: newPage };
//         setFilters(updatedFilters);
//         fetchBooks(updatedFilters);
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <h1 className="text-2xl font-semibold mb-6">🔍 Tìm kiếm sách</h1>

//             {/* Bộ lọc */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <select
//                     value={filters.categoryId}
//                     onChange={(e) => setFilters({ ...filters, categoryId: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn thể loại --</option>
//                     {options.categories.map((c) => (
//                         <option key={c.category_id} value={c.category_id}>{c.name}</option>
//                     ))}
//                 </select>

//                 <select
//                     value={filters.author}
//                     onChange={(e) => setFilters({ ...filters, author: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn tác giả --</option>
//                     {options.authors.map((a, i) => (
//                         <option key={i} value={a}>{a}</option>
//                     ))}
//                 </select>

//                 <select
//                     value={filters.publisher}
//                     onChange={(e) => setFilters({ ...filters, publisher: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn nhà xuất bản --</option>
//                     {options.publishers.map((p, i) => (
//                         <option key={i} value={p}>{p}</option>
//                     ))}
//                 </select>

//                 <input
//                     type="number"
//                     placeholder={`Giá từ (${options.priceRange.min_price})`}
//                     value={filters.minPrice}
//                     onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
//                     className="border rounded-lg p-2"
//                 />

//                 <input
//                     type="number"
//                     placeholder={`Giá đến (${options.priceRange.max_price})`}
//                     value={filters.maxPrice}
//                     onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
//                     className="border rounded-lg p-2"
//                 />

//                 <select
//                     value={filters.sort}
//                     onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="desc">Mới nhất</option>
//                     <option value="asc">Cũ nhất</option>
//                 </select>
//             </div>

//             <button
//                 onClick={handleSearch}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//                 Tìm kiếm
//             </button>

//             {/* ⚡ Hiển thị thông báo lỗi */}
//             {errorMsg && (
//                 <div className="mt-4 text-red-600 font-semibold bg-red-50 border border-red-200 p-3 rounded-lg">
//                     ⚠️ {errorMsg}
//                 </div>
//             )}

//             {/* Danh sách sách */}
//             <div className="mt-8">
//                 {loading ? (
//                     <p>Đang tải sách...</p>
//                 ) : books.length === 0 ? (
//                     <p>Không có sách nào phù hợp.</p>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {books.map((book) => {
//                             const imagePath =
//                                 book.Images && book.Images.length > 0
//                                     ? `${BASE_URL}/${book.Images[0].image_url}`
//                                     : "/default-book.jpg";

//                             return (
//                                 <div
//                                     key={book.id || book.book_id}
//                                     className="border rounded-xl p-4 shadow hover:shadow-lg transition"
//                                 >
//                                     <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
//                                         <img
//                                             src={imagePath}
//                                             alt={book.title}
//                                             className="w-full h-full object-cover object-center"
//                                             onError={(e) => (e.target.src = "/default-book.jpg")}
//                                         />
//                                     </div>

//                                     <h3 className="font-semibold text-lg mt-3 line-clamp-2">{book.title}</h3>
//                                     <p className="text-sm text-gray-600 mb-1">Tác giả: {book.author}</p>
//                                     <p className="text-sm text-gray-600 mb-1">NXB: {book.publisher}</p>
//                                     <p className="font-bold text-blue-700">{book.price.toLocaleString()} đ</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </div>

//             {/* Phân trang */}
//             {pagination.totalPages > 1 && (
//                 <div className="flex justify-center items-center gap-2 mt-6">
//                     <button
//                         onClick={() => handlePageChange(pagination.currentPage - 1)}
//                         disabled={pagination.currentPage === 1}
//                         className="px-3 py-1 border rounded disabled:opacity-50"
//                     >
//                         ← Trước
//                     </button>
//                     <span>
//                         Trang {pagination.currentPage} / {pagination.totalPages}
//                     </span>
//                     <button
//                         onClick={() => handlePageChange(pagination.currentPage + 1)}
//                         disabled={pagination.currentPage === pagination.totalPages}
//                         className="px-3 py-1 border rounded disabled:opacity-50"
//                     >
//                         Sau →
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }



// popular / search
// import React, { useEffect, useState } from "react";

// export default function SearchPage() {
//     const BASE_URL = "http://localhost:8080";

//     // ----- Filters cho API cũ -----
//     const [filters, setFilters] = useState({
//         categoryId: "",
//         author: "",
//         publisher: "",
//         minPrice: "",
//         maxPrice: "",
//         sort: "desc",
//     });

//     // ----- Pagination riêng cho 2 API -----
//     const [oldPagination, setOldPagination] = useState({ currentPage: 1, totalPages: 1, limit: 5 });
//     const [newPagination, setNewPagination] = useState({ currentPage: 1, totalPages: 1, limit: 5 });

//     const [searchQuery, setSearchQuery] = useState("");
//     const [books, setBooks] = useState([]);
//     const [options, setOptions] = useState({
//         authors: [],
//         publishers: [],
//         categories: [],
//         priceRange: { min_price: 0, max_price: 0 },
//     });
//     const [loading, setLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState("");

//     // ----- Load bộ lọc API cũ -----
//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const res = await fetch(`${BASE_URL}/api/popular/getFilterOptions`);
//                 const data = await res.json();
//                 if (data.success) setOptions(data.data);
//             } catch (err) {
//                 console.error(err);
//                 setErrorMsg("Không thể tải danh sách bộ lọc!");
//             }
//         };
//         fetchOptions();
//     }, []);

//     // ----- API cũ (filter) -----
//     const fetchOldAPI = async (page = 1) => {
//         setLoading(true);
//         setErrorMsg("");

//         try {
//             const query = new URLSearchParams();
//             for (const key in filters) {
//                 if (filters[key] !== "" && filters[key] != null) query.append(key, filters[key]);
//             }
//             query.set("page", page);
//             query.set("limit", oldPagination.limit);

//             const res = await fetch(`${BASE_URL}/api/popular/getFilteredBook?${query.toString()}`);
//             const data = await res.json();

//             if (!res.ok || !data.success) {
//                 setErrorMsg(data.message || "Lỗi API cũ!");
//                 setBooks([]);
//                 return;
//             }

//             setBooks(data.data.books || []);
//             setOldPagination({
//                 ...oldPagination,
//                 currentPage: data.data.currentPage || page,
//                 totalPages: data.data.totalPages || 1,
//             });
//         } catch (err) {
//             console.error(err);
//             setErrorMsg("Lỗi kết nối server API cũ!");
//             setBooks([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ----- API mới (search query) -----
//     const fetchNewAPI = async (page = 1) => {
//         setLoading(true);
//         setErrorMsg("");

//         try {
//             const limit = newPagination.limit;
//             const url = `${BASE_URL}/api/popular/handleSearchBooks?q=${encodeURIComponent(
//                 searchQuery
//             )}&page=${page}&limit=${limit}`;

//             const res = await fetch(url);
//             const data = await res.json();

//             if (!res.ok || !data.success) {
//                 setErrorMsg(data.message || "Lỗi API tìm kiếm!");
//                 setBooks([]);
//                 return;
//             }

//             const booksData = data.data.books || data.data || [];
//             const totalPages = data.data.totalPages || 1;

//             setBooks(booksData);
//             setNewPagination({ ...newPagination, currentPage: page, totalPages });
//         } catch (err) {
//             console.error(err);
//             setErrorMsg("Lỗi kết nối server API mới!");
//             setBooks([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ----- Handlers -----
//     const handleOldSearchClick = () => fetchOldAPI(1);
//     const handleNewSearchClick = () => fetchNewAPI(1);

//     const handlePageChange = (newPage) => {
//         if (searchQuery.trim() !== "") {
//             if (newPage < 1 || newPage > newPagination.totalPages) return;
//             fetchNewAPI(newPage);
//         } else {
//             if (newPage < 1 || newPage > oldPagination.totalPages) return;
//             fetchOldAPI(newPage);
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <h1 className="text-2xl font-semibold mb-6">🔍 Tìm kiếm sách</h1>

//             {/* API mới */}
//             <div className="flex gap-2 mb-4">
//                 <input
//                     type="text"
//                     placeholder="Nhập từ khóa..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="border rounded-lg p-2 flex-1"
//                 />
//                 <button
//                     onClick={handleNewSearchClick}
//                     className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 >
//                     Tìm theo từ khóa (API mới)
//                 </button>
//             </div>

//             {/* Bộ lọc API cũ */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <select
//                     value={filters.categoryId}
//                     onChange={(e) => setFilters({ ...filters, categoryId: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn thể loại --</option>
//                     {options.categories.map((c) => (
//                         <option key={c.category_id} value={c.category_id}>{c.name}</option>
//                     ))}
//                 </select>

//                 <select
//                     value={filters.author}
//                     onChange={(e) => setFilters({ ...filters, author: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn tác giả --</option>
//                     {options.authors.map((a, i) => (
//                         <option key={i} value={a}>{a}</option>
//                     ))}
//                 </select>

//                 <select
//                     value={filters.publisher}
//                     onChange={(e) => setFilters({ ...filters, publisher: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="">-- Chọn nhà xuất bản --</option>
//                     {options.publishers.map((p, i) => (
//                         <option key={i} value={p}>{p}</option>
//                     ))}
//                 </select>

//                 <input
//                     type="number"
//                     placeholder={`Giá từ (${options.priceRange.min_price})`}
//                     value={filters.minPrice}
//                     onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
//                     className="border rounded-lg p-2"
//                 />

//                 <input
//                     type="number"
//                     placeholder={`Giá đến (${options.priceRange.max_price})`}
//                     value={filters.maxPrice}
//                     onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
//                     className="border rounded-lg p-2"
//                 />

//                 <select
//                     value={filters.sort}
//                     onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
//                     className="border rounded-lg p-2"
//                 >
//                     <option value="desc">Mới nhất</option>
//                     <option value="asc">Cũ nhất</option>
//                 </select>
//             </div>

//             <button
//                 onClick={handleOldSearchClick}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4"
//             >
//                 Tìm theo bộ lọc (API cũ)
//             </button>

//             {/* Thông báo lỗi */}
//             {errorMsg && (
//                 <div className="mt-4 text-red-600 font-semibold bg-red-50 border border-red-200 p-3 rounded-lg">
//                     ⚠️ {errorMsg}
//                 </div>
//             )}

//             {/* Danh sách sách */}
//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {loading ? (
//                     <p>Đang tải sách...</p>
//                 ) : books.length === 0 ? (
//                     <p>Không có sách nào phù hợp.</p>
//                 ) : (
//                     books.map((book) => {
//                         const imagePath =
//                             book.Images && book.Images.length > 0
//                                 ? `${BASE_URL}/${book.Images[0].image_url}`
//                                 : "/default-book.jpg";

//                         return (
//                             <div key={book.id || book.book_id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
//                                 <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
//                                     <img
//                                         src={imagePath}
//                                         alt={book.title}
//                                         className="w-full h-full object-cover"
//                                         onError={(e) => (e.target.src = "/default-book.jpg")}
//                                     />
//                                 </div>
//                                 <h3 className="font-semibold text-lg mt-3 line-clamp-2">{book.title}</h3>
//                                 <p className="text-sm text-gray-600 mb-1">Tác giả: {book.author}</p>
//                                 <p className="text-sm text-gray-600 mb-1">NXB: {book.publisher}</p>
//                                 <p className="font-bold text-blue-700">{book.price.toLocaleString()} đ</p>
//                             </div>
//                         );
//                     })
//                 )}
//             </div>

//             {/* Phân trang */}
//             <div className="flex justify-center items-center gap-2 mt-6">
//                 <button
//                     onClick={() => handlePageChange(
//                         searchQuery.trim() !== "" ? newPagination.currentPage - 1 : oldPagination.currentPage - 1
//                     )}
//                     disabled={
//                         searchQuery.trim() !== "" ? newPagination.currentPage === 1 : oldPagination.currentPage === 1
//                     }
//                     className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                     ← Trước
//                 </button>
//                 <span>
//                     Trang {searchQuery.trim() !== "" ? newPagination.currentPage : oldPagination.currentPage} /{" "}
//                     {searchQuery.trim() !== "" ? newPagination.totalPages : oldPagination.totalPages}
//                 </span>
//                 <button
//                     onClick={() => handlePageChange(
//                         searchQuery.trim() !== "" ? newPagination.currentPage + 1 : oldPagination.currentPage + 1
//                     )}
//                     disabled={
//                         searchQuery.trim() !== "" ? newPagination.currentPage === newPagination.totalPages : oldPagination.currentPage === oldPagination.totalPages
//                     }
//                     className="px-3 py-1 border rounded disabled:opacity-50"
//                 >
//                     Sau →
//                 </button>
//             </div>
//         </div>
//     );
// }







// user/ register

// import { useState } from "react";

// export default function Register() {
//     const [form, setForm] = useState({ name: "", email: "", password: "" });
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         try {
//             const res = await fetch("http://localhost:8080/api/user/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(form),
//             });

//             const data = await res.json();

//             if (res.ok) {
//                 setMessage(data.message || "Đăng ký thành công!");
//             } else {
//                 setMessage(data.message || "Có lỗi xảy ra!");
//             }
//         } catch (err) {
//             console.error("Lỗi fetch:", err);
//             setMessage("Không thể kết nối đến server.");
//         }
//     };

//     return (
//         <div style={{ maxWidth: 400, margin: "50px auto" }}>
//             <h2>Đăng ký tài khoản</h2>
//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//                 <input
//                     type="text"
//                     placeholder="Tên"
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Mật khẩu"
//                     value={form.password}
//                     onChange={(e) => setForm({ ...form, password: e.target.value })}
//                     required
//                 />
//                 <button type="submit">Đăng ký</button>
//             </form>
//             <p style={{ marginTop: 10, color: "green" }}>{message}</p>
//         </div>
//     );
// }


// user/login

// import { useState } from "react";

// export default function Login() {
//     const [email, setEmail] = useState("test@gmail.com");
//     const [password, setPassword] = useState("123456");
//     const [message, setMessage] = useState("");
//     const [cookies, setCookies] = useState(document.cookie);

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await fetch("http://localhost:8080/api/user/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//                 credentials: "include", // ⚡ BẮT BUỘC để cookie hoạt động
//             });

//             const data = await res.json();
//             if (data.success) {
//                 setMessage("✅ Đăng nhập thành công!");
//             } else {
//                 setMessage("❌ " + data.message);
//             }

//             // Cập nhật cookie hiển thị (FE chỉ thấy cookie không có httpOnly)
//             setCookies(document.cookie);

//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     return (
//         <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
//             <h2>Đăng nhập</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Nhập email"
//                     style={{ width: "100%", padding: 8, marginBottom: 10 }}
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Nhập mật khẩu"
//                     style={{ width: "100%", padding: 8, marginBottom: 10 }}
//                 />
//                 <button type="submit" style={{ padding: "8px 16px" }}>
//                     Đăng nhập
//                 </button>
//             </form>

//             <p>{message}</p>

//             <h4>🍪 Cookie hiện tại:</h4>
//             <pre>{cookies || "Không có cookie nào"}</pre>
//         </div>
//     );
// }


// forget password.
// import { useState } from "react";

// export default function ForgotPassword() {
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch("http://localhost:8080/api/user/forgotPassword", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email }),
//             });
//             const data = await res.json();

//             if (res.ok) {
//                 setMessage(data.message || "Vui lòng kiểm tra email của bạn!");
//             } else {
//                 setMessage(data.message || "Có lỗi xảy ra!");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Quên mật khẩu</h2>
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                     <input
//                         type="email"
//                         placeholder="Nhập email của bạn"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="border p-2 rounded"
//                         required
//                     />
//                     <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//                         Gửi link đổi mật khẩu
//                     </button>
//                 </form>
//                 {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//             </div>
//         </div>
//     );
// }

// reset password

// import { useState, useEffect } from "react";

// export default function ResetPassword() {
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [token, setToken] = useState("");

//     // Lấy token từ URL khi component mount
//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const t = params.get("token");
//         if (!t) setMessage("Token không hợp lệ");
//         setToken(t);
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!token) return setMessage("Token không hợp lệ");

//         try {
//             const res = await fetch("http://localhost:8080/api/user/resetPassword", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ token, password }),
//             });

//             const data = await res.json();

//             if (res.ok) setMessage(data.message || "Đổi mật khẩu thành công!");
//             else setMessage(data.message || "Có lỗi xảy ra");
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Đổi mật khẩu</h2>
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                     <input
//                         type="password"
//                         placeholder="Nhập mật khẩu mới"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="border p-2 rounded"
//                         required
//                         minLength={6}
//                     />
//                     <button
//                         type="submit"
//                         className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
//                     >
//                         Đổi mật khẩu
//                     </button>
//                 </form>
//                 {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//             </div>
//         </div>
//     );
// }


// get info

// import { useEffect, useState } from "react";

// export default function Profile() {
//     const [user, setUser] = useState(null);
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const res = await fetch("http://localhost:8080/api/user/me", {
//                     method: "GET",
//                     credentials: "include", // quan trọng để gửi cookie
//                 });
//                 const data = await res.json();
//                 if (res.ok) setUser(data.data);
//                 else setMessage(data.message);
//             } catch (err) {
//                 console.error(err);
//                 setMessage("Lỗi kết nối server");
//             }
//         };

//         fetchProfile();
//     }, []);

//     if (message) return <p>{message}</p>;
//     if (!user) return <p>Đang tải thông tin...</p>;

//     return (
//         <div>
//             <h2>Thông tin tài khoản</h2>
//             <p>ID: {user.user_id}</p>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//             <p>Role: {user.role}</p>
//             <p>Ngày tạo: {new Date(user.createdAt).toLocaleString()}</p>
//         </div>
//     );
// }


// get info of user
// import { useState } from "react";

// export default function App() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [userInfo, setUserInfo] = useState(null);
//     const [message, setMessage] = useState("");

//     // Login
//     const handleLogin = async () => {
//         try {
//             const res = await fetch("http://localhost:8080/api/user/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//                 credentials: "include",
//             });
//             const data = await res.json();
//             if (res.ok) {
//                 setMessage("Đăng nhập thành công!");
//             } else {
//                 setMessage(data.message || "Đăng nhập thất bại");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     // Lấy profile
//     const handleGetProfile = async () => {
//         try {
//             const res = await fetch("http://localhost:8080/api/user/getInfo", {
//                 method: "GET",
//                 credentials: "include",
//             });
//             const data = await res.json();
//             if (res.ok) {
//                 setUserInfo(data.data);
//                 setMessage("");
//             } else {
//                 setMessage(data.message || "Lỗi khi lấy thông tin");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
//             <h1 className="text-3xl font-bold">Test Login + Profile</h1>

//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border p-2 rounded w-64"
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border p-2 rounded w-64"
//             />
//             <button
//                 onClick={handleLogin}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//                 Đăng nhập
//             </button>

//             <button
//                 onClick={handleGetProfile}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//                 Xem thông tin user
//             </button>

//             {message && <p className="text-red-500">{message}</p>}

//             {userInfo && (
//                 <div className="bg-white p-4 rounded shadow mt-4 w-80 flex flex-col items-center gap-2">
//                     <h2 className="font-bold text-xl mb-2">Thông tin user</h2>

//                     {/* Hiển thị avatar */}
//                     <img
//                         src={`http://localhost:8080${userInfo.avatar}` || "http://localhost:8080/image/defaults/default-avatar.png"}
//                         alt="Avatar"
//                         className="w-24 h-24 rounded-full object-cover mb-2"
//                     />

//                     <p>ID: {userInfo.id}</p>
//                     <p>Name: {userInfo.name}</p>
//                     <p>Email: {userInfo.email}</p>
//                     <p>Role: {userInfo.role}</p>
//                 </div>
//             )}
//         </div>
//     );
// }


// update images và name.
// import { useState } from "react";

// export default function App() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [userInfo, setUserInfo] = useState(null);
//     const [message, setMessage] = useState("");
//     const [editName, setEditName] = useState("");
//     const [editAvatar, setEditAvatar] = useState(null);
//     const [previewAvatar, setPreviewAvatar] = useState("");

//     // Login
//     const handleLogin = async () => {
//         try {
//             const res = await fetch("http://localhost:8080/api/user/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//                 credentials: "include",
//             });
//             const data = await res.json();
//             if (res.ok) {
//                 setMessage("Đăng nhập thành công!");
//             } else {
//                 setMessage(data.message || "Đăng nhập thất bại");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     // Get profile
//     const handleGetProfile = async () => {
//         try {
//             const res = await fetch("http://localhost:8080/api/user/getInfo", {
//                 method: "GET",
//                 credentials: "include",
//             });
//             const data = await res.json();
//             if (res.ok) {
//                 setUserInfo(data.data);
//                 setEditName(data.data.name);
//                 setPreviewAvatar(`http://localhost:8080${data.data.avatar}`); // ảnh hiện tại
//                 setMessage("");
//             } else {
//                 setMessage(data.message || "Lỗi khi lấy thông tin");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi kết nối server");
//         }
//     };

//     // Update profile (name + avatar)
//     const handleUpdateProfile = async () => {
//         const formData = new FormData();
//         formData.append("name", editName);
//         if (editAvatar) formData.append("avatar", editAvatar); // chỉ gửi nếu user thật sự chọn ảnh mới

//         try {
//             const res = await fetch("http://localhost:8080/api/user/updateInfo", {
//                 method: "PUT",
//                 credentials: "include",
//                 body: formData,
//             });
//             const data = await res.json();
//             if (res.ok) {
//                 setMessage("Cập nhật thành công!");
//                 setUserInfo(prev => ({
//                     ...prev,
//                     name: data.data.name,
//                     avatar: data.data.avatar,
//                 }));
//             } else {
//                 setMessage(data.message || "Cập nhật thất bại");
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage("Lỗi server!");
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6 p-4">
//             <h1 className="text-3xl font-bold">Test Login + Profile</h1>

//             {/* Login Form */}
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border p-2 rounded w-64"
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border p-2 rounded w-64"
//             />
//             <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Đăng nhập
//             </button>

//             <button onClick={handleGetProfile} className="bg-green-500 text-white px-4 py-2 rounded">
//                 Xem thông tin user
//             </button>

//             {message && <p className="text-red-500">{message}</p>}

//             {/* Hiển thị thông tin + chỉnh sửa */}
//             {userInfo && (
//                 <div className="bg-white p-4 rounded shadow mt-4 w-96 flex flex-col gap-3">
//                     <h2 className="font-bold text-xl">Thông tin User</h2>

//                     {/* Avatar hiển thị + preview nếu đổi ảnh */}
//                     <img
//                         src={
//                             previewAvatar ||
//                             "http://localhost:8080/image/defaults/default-avatar.png"
//                         }
//                         alt="Avatar"
//                         className="w-24 h-24 rounded-full object-cover mx-auto"
//                     />

//                     {/* Chọn ảnh mới */}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => {
//                             const file = e.target.files[0];
//                             if (file) {
//                                 setEditAvatar(file);
//                                 setPreviewAvatar(URL.createObjectURL(file));
//                             }
//                         }}
//                     />

//                     {/* Name editable */}
//                     <label className="mt-2 font-semibold">Name:</label>
//                     <input
//                         type="text"
//                         value={editName}
//                         onChange={(e) => setEditName(e.target.value)}
//                         className="border p-2 rounded w-full"
//                     />

//                     {/* Email & Role (read-only) */}
//                     <p className="text-gray-600">Email (readonly): {userInfo.email}</p>
//                     <p className="text-gray-600">Role (readonly): {userInfo.role}</p>

//                     {/* Update button */}
//                     <button
//                         onClick={handleUpdateProfile}
//                         className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-2"
//                     >
//                         Cập nhật
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
