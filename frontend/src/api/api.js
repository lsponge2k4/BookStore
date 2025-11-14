// src/api/api.js
const API = 'http://localhost:8080/api/home';
const BACKEND = 'http://localhost:8080';

export const getBooks = async (page = 1, limit = 10) => {
    const res = await fetch(`${API}/getAllBook/public?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error('Lỗi tải sách');
    const json = await res.json();
    return {
        books: json.data.books || [],
        total: json.data.pagination.total || 0,
        page: json.data.pagination.page || page,
        limit: json.data.pagination.limit || limit,
    };
};

export const getBookById = async (id) => {
    const res = await fetch(`${API}/getBookById?book_id=${id}`);
    if (!res.ok) throw new Error('Lỗi quick view');
    const json = await res.json();
    return json.data;
};

export const getBookDetail = async (id) => {
    const res = await fetch(`${API}/getBookDetails?id_book=${id}`);
    if (!res.ok) throw new Error('Lỗi chi tiết sách');
    const json = await res.json();
    return json.data;
};

// MỚI: LẤY RELATED BOOKS CÓ PHÂN TRANG
export const getRelatedBooks = async (categoryId, excludeBookId, page = 1, limit = 5) => {
    const res = await fetch(
        `${API}/getRelatedBooks?categoryId=${categoryId}&excludeBookId=${excludeBookId}&page=${page}&limit=${limit}`
    );
    if (!res.ok) throw new Error('Lỗi tải related books');
    const json = await res.json();
    return {
        books: json.data.books || [],
        page: json.data.pagination?.page || page,
        totalPages: Math.ceil((json.data.pagination?.total || 0) / limit),
    };
};

export { BACKEND };