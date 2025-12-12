import api from './api'

export const getAllUsersAPI = (page, limit) => {
    return api.get(`/api/admin/getAllUsers?page=${page}&limit=${limit}`);
};

export const getAllCategoriesAPI = (page, limit) => {
    return api.get(`/api/admin/getAllCategories?page=${page}&limit=${limit}`);
};

export const createCategoryAPI = (formData) => {
    return api.post("/api/admin/createCategory", formData); // formData : name, image
};

export const updateCategoryAPI = (formData) => {
    return api.put("/api/admin/updateCategory", formData); // formData : category_id, name, image
};

export const deleteCategoryAPI = (category_id) => {
    return api.delete(`/api/admin/deleteCategory/${category_id}`);
};

