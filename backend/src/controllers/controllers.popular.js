import * as PopularService from "../services/services.popular";
import * as Response from "../utils/response";

export const getFilterOptions = async (req, res) => {
    try {
        const data = await PopularService.getFilterOptions();

        if (!data.success) return Response.badRequest(res, "Bad Request", 400);

        return Response.success(res, data.data, "Lấy dữ liệu bộ lọc thành công", 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, "Lỗi server khi lấy dữ liệu bộ lọc", 500);
    }
};

// get books by hobby.
export const getFilteredBook = async (req, res) => {
    try {
        const data = await PopularService.getFilteredBooks(req.query);
        if (!data.success) return Response.badRequest(res, "Bad Request", 400);
        return Response.success(res, data.data, "Lấy danh sách sách thành công", 200);
    } catch (error) {
        console.error(error);
        return Response.error(res, "Lỗi server khi lấy danh sách sách", 500);
    }
};