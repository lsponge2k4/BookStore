import * as HomeService from "../services/services.home";
import * as Response from "../utils/response.js";

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