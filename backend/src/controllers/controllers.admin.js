import * as AdminService from "../services/services.admin";
import * as Response from "../utils/response";

// get all users for admin.
export const getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const data = await AdminService.getAllUsers(page, limit);

        if (!data.success) {
            return Response.badRequest(res, data.message, 400);
        }

        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        console.error("getAllUsers controller error:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};

// create new category.
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) return Response.badRequest(res, "Tên danh mục không được để trống!", 400);
        if (!req.file) {
            return Response.badRequest(res, "Vui lòng chọn ảnh cho danh mục!", 400);
        }


        const result = await AdminService.createCategory(name, req.file);

        if (!result.success) return Response.badRequest(res, result.message, 400);

        return Response.success(res, result.data, result.message, 201);
    } catch (error) {

        console.error("createCategory controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// update category.

export const updateCategory = async (req, res) => {
    try {
        const { category_id, name } = req.body;

        if (!category_id) return Response.badRequest(res, "category_id không được để trống", 400);
        if (name && (name.length < 3 || name.length > 100)) {
            return Response.badRequest(res, "Tên danh mục phải từ 3 đến 100 ký tự", 400);
        }

        const result = await AdminService.updateCategory(category_id, name, req.file);

        if (!result.success) return Response.badRequest(res, result.message, 400);

        return Response.success(res, result.data, result.message, 200);
    } catch (error) {
        console.error("updateCategory controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// delete Category.
export const deleteCategory = async (req, res) => {
    try {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            return Response.badRequest(res, "ID danh mục không hợp lệ!", 400);
        }

        const result = await AdminService.deleteCategory(category_id);

        if (!result.success) return Response.badRequest(res, result.message, 400);

        return Response.success(res, null, result.message, 200);
    } catch (error) {
        console.error("deleteCategory controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// get all categories.
export const getAllCategories = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;

        const result = await AdminService.getAllCategories(page, limit);

        if (!result.success)
            return Response.badRequest(res, result.message, 400);

        return Response.success(res, result.data, result.message, 200);
    } catch (error) {
        console.error("getAllCategories controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};


// get all books for admin.

export const getAllBookAdmin = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        if (!page || !limit) {
            return Response.badRequest(res, "Thiếu page hoặc thiếu limit!", 400);
        }

        const data = await AdminService.getAllBooksAdmin(page, limit);

        return Response.success(res, data, "Lấy danh sách thành công!", 200);
    } catch (error) {
        console.error(error);
        return Response.error(res, "Lỗi hệ thống!", 500);
    }
};

// create a new book.

export const createBook = async (req, res) => {
    try {
        const data = req.body;

        if (!req.files || !req.files.cover || req.files.cover.length === 0) {
            return Response.badRequest(res, "Vui lòng chọn ảnh bìa sách!", 400);
        }

        const result = await AdminService.createBook(data, req.files);

        if (!result.success) {
            return Response.badRequest(res, result.message, 400);
        }
        return Response.success(res, result.data, result.message, 201);
    } catch (error) {
        console.error("createBook controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};