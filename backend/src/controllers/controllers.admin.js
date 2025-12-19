import * as AdminService from "../services/services.admin.js";
import * as Response from "../utils/response.js";
import logger from "../config/logger.js";

// get all users for admin.
export const getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const data = await AdminService.getAllUsers(page, limit);

        if (!data.success) {
            logger.error(" lỗi getAllUsers controller:", { message: data.message });
            return Response.badRequest(res, data.message, 400);
        }
        logger.info("getAllUsers controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (err) {
        logger.error("catch: lỗi getAllUsers controller:", { error: err });
        // console.error("getAllUsers controller error:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};

// create new category.
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) return Response.badRequest(res, "Tên danh mục không được để trống!", 400);
        if (!req.file) {
            logger.error("createCategory controller error: Vui lòng chọn ảnh cho danh mục!");
            return Response.badRequest(res, "Vui lòng chọn ảnh cho danh mục!", 400);
        }


        const result = await AdminService.createCategory(name, req.file);

        if (!result.success) return Response.badRequest(res, result.message, 400);

        logger.info("createCategory controller success:", { message: result.message });
        return Response.success(res, result.data, result.message, 201);
    } catch (error) {
        logger.error("createCategory controller error:", { error: error });
        // console.error("createCategory controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// update category.

export const updateCategory = async (req, res) => {
    try {
        const { category_id, name } = req.body;

        if (!category_id) return Response.badRequest(res, "category_id không được để trống", 400);
        if (name && (name.length < 3 || name.length > 100)) {
            logger.error("updateCategory controller error: Tên danh mục phải từ 3 đến 100 ký tự");
            return Response.badRequest(res, "Tên danh mục phải từ 3 đến 100 ký tự", 400);
        }

        const result = await AdminService.updateCategory(category_id, name, req.file);

        logger.info("updateCategory controller success:", { message: result.message });
        if (!result.success) return Response.badRequest(res, result.message, 400);

        return Response.success(res, result.data, result.message, 200);
    } catch (error) {
        logger.error("updateCategory controller error:", { error: error });
        // console.error("updateCategory controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// delete Category.
export const deleteCategory = async (req, res) => {
    try {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            logger.error("deleteCategory controller error: ID danh mục không hợp lệ!");
            return Response.badRequest(res, "ID danh mục không hợp lệ!", 400);
        }

        const result = await AdminService.deleteCategory(category_id);

        if (!result.success) return Response.badRequest(res, result.message, 400);

        logger.info("deleteCategory controller success:", { message: result.message });
        return Response.success(res, null, result.message, 200);
    } catch (error) {
        logger.error("deleteCategory controller error:", { error: error });
        // console.error("deleteCategory controller error:", error);
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

        logger.info("getAllCategories controller success:", { message: result.message });
        return Response.success(res, result.data, result.message, 200);
    } catch (error) {
        // console.error("getAllCategories controller error:", error);
        logger.error("getAllCategories controller error:", { error: error });
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

        logger.info("getAllBookAdmin controller success:", { message: "Lấy danh sách sách thành công!" });
        return Response.success(res, data, "Lấy danh sách thành công!", 200);
    } catch (error) {
        logger.error("getAllBookAdmin controller error:", { error: error });
        // console.error(error);
        return Response.error(res, "Lỗi hệ thống!", 500);
    }
};

// create a new book.

export const createBook = async (req, res) => {
    try {
        const data = req.body;

        if (!req.files || !req.files.cover || req.files.cover.length === 0) {
            logger.error("createBook controller error: Vui lòng chọn ảnh bìa sách!");
            return Response.badRequest(res, "Vui lòng chọn ảnh bìa sách!", 400);
        }

        const result = await AdminService.createBook(data, req.files);

        if (!result.success) {
            logger.error("createBook controller error:", { message: result.message });
            return Response.badRequest(res, result.message, 400);
        }
        logger.info("createBook controller success:", { message: result.message });
        return Response.success(res, result.data, result.message, 201);
    } catch (error) {
        logger.error("createBook controller error:", { error: error });
        // console.error("createBook controller error:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// update a book.
export const updateBook = async (req, res) => {
    try {
        const { book_id } = req.params;

        if (!book_id) return Response.badRequest(res, "Thiếu ID sách cần cập nhật!", 400);

        const data = await AdminService.updateBook(book_id, req.body, req.files);

        if (!data.success) return Response.badRequest(res, data.message, 400);

        logger.info("updateBook controller success:", { message: data.message });
        return Response.success(res, data.data, data.message, 200);
    } catch (error) {
        logger.error("updateBook controller error:", { error: error });
        // console.error("updateBook controller error:", error);
        return Response.error(res, "Lỗi hệ thống!", 500);
    }
};

// delete a book.

export const removeBook = async (req, res) => {
    try {
        const { book_id } = req.params;
        const data = await AdminService.deleteBook(book_id);
        if (!data.success) {
            logger.error("removeBook controller error:", { message: data.message });
            return Response.badRequest(res, data.message, 400)
        }
        logger.info("removeBook controller success:", { message: data.message });
        return Response.success(res, null, data.message, 200);
    }
    catch (error) {
        logger.error("removeBook controller error:", { error: error });
        // console.log("error controllers:", error);
        Response.success(res, "Error", 500);
    }
};
