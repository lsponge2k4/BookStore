import * as HomeService from "../services/services.home";
import * as Response from "../utils/response";

export const getAllBook = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        if (!page || !limit) {
            Response.badRequest(res, "Thiếu page hoặc thiếu limit!", 400);
        }

        const data = await HomeService.getAllBooks(page, limit);

        Response.success(res, data, "Lấy danh sách thành công!", 200);
    } catch (error) {
        console.error(error);
        Response.error(res, "Lỗi hệ thống!", 500);
    }
};

// get the book with id

export const getBook = async (req, res) => {
    try {
        const { book_id } = req.query;
        if (!book_id) return Response.badRequest(res, 'book_id không được để trống', 400);

        const data = await HomeService.getBookById(book_id);
        if (!data.success) return Response.badRequest(res, data.message, 404);

        return Response.success(res, data.data, 'Lấy thông tin sách thành công', 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, 'Lỗi server', 500);
    }
};