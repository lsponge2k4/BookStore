import * as PopularService from "../services/services.popular";
import * as Response from "../utils/response";

export const getFilterOptions = async (req, res) => {
    try {
        const data = await PopularService.getFilterOptions();

        if (!data.success) { return Response.badRequest(res, "Bad Request", 400); }

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
        if (!data.success) { return Response.badRequest(res, "Bad Request", 400); }
        return Response.success(res, data.data, "Lấy danh sách sách thành công", 200);
    } catch (error) {
        console.error(error);
        return Response.error(res, "Lỗi server khi lấy danh sách sách", 500);
    }
};


// input the search
export const handleSearchBooks = async (req, res) => {
    try {
        const q = req.query.q;
        const page = parseInt(req.query.page || 1);
        const limit = parseInt(req.query.limit || 5);

        console.log("q", typeof (q), "page: ", Number.isInteger(page), "limit: ", Number.isInteger(limit))
        if (!q || q.trim() === "") { return Response.badRequest(res, "Thiếu từ khóa tìm kiếm", 400); }

        const data = await PopularService.searchBooks(q.trim(), page, limit);

        if (!data.success) { return Response.badRequest(res, "Lấy dữ liệu không thành công", 400); }

        return Response.success(res, data.data, "Tìm kiếm thành công", 200);

    } catch (error) {
        console.error("Lỗi controllers:", error);
        return Response.error(res, "Lỗi server khi tìm kiếm sách", 500);
    }
};