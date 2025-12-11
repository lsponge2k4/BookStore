import api from './api'

export const loginAPI = (email, password) => {
    return api.post("/api/user/login", { email, password });
}

export const registerAPI = (name, email, password) => {
    return api.post("/api/user/register", { name, email, password });
}

export const forgotPasswordAPI = (email) => {
    return api.post("/api/user/forgotPassword", { email });
}

export const resetPasswordAPI = (token, password) => {
    return api.post("/api/user/resetPassword", { token, password });
}

export const changePasswordAPI = (oldPassword, newPassword) => {
    return api.put("/api/user/changePassword", { oldPassword, newPassword });
};

export const getUserInfoAPI = () => {
    return api.get("/api/user/getInfo");
}

export const updateUserInfoAPI = (formData) => {
    return api.put("/api/user/updateInfo", formData);
};

export const getBooksAPI = (page, limit) => {
    return api.get(`/api/home/getAllBook/public?page=${page}&limit=${limit}`);
};


export const getBookByIdAPI = (bookId) => {
    return api.get(`/api/home/getBookById?book_id=${bookId}`);
};

export const getRelatedBooksAPI = (categoryId, excludeBookId, page, limit) => {
    return api.get(`/api/home/getRelatedBooks?categoryId=${categoryId}&excludeBookId=${excludeBookId}&page=${page}&limit=${limit}`);
};

export const getBookDetailsAPI = (bookId) => {
    return api.get(`/api/home/getBookDetails?id_book=${bookId}`);
};

export const getFilteredBookAPI = (queryString) => {
    return api.get(`/api/popular/getFilteredBook?${queryString}`);
};

export const getFilterOptionsAPI = () => {
    return api.get(`/api/popular/getFilterOptions`);
};

export const handleSearchBooksAPI = (queryString, page, limit) => {
    return api.get(`/api/popular/handleSearchBooks?q=${queryString}&page=${page}&limit=${limit}`);
};

// Giỏ hàng 

export const addToCartAPI = (book_id, quantity = 1) => {
    return api.post(`/api/user/cart/addToCart`, { book_id, quantity });
};

export const getAllProductsInCartAPI = () => {
    return api.get(`/api/user/cart/getAllProductsInCart`);
};