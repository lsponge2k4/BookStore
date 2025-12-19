import * as PopularService from "../services/services.popular.js";
import * as Response from "../utils/response.js";
import logger from "../config/logger.js";

export const getFilterOptions = async (req, res) => {
    try {
        const data = await PopularService.getFilterOptions();

        if (!data.success) {
            logger.error("getFilterOptions controller error: Bad Request");
            return Response.badRequest(res, "Bad Request", 400);
        }
        logger.info("getFilterOptions controller success: Lấy dữ liệu bộ lọc thành công");
        return Response.success(res, data.data, "Lấy dữ liệu bộ lọc thành công", 200);
    } catch (err) {
        logger.error("getFilterOptions controller error:", { error: err });
        // console.error(err);
        return Response.error(res, "Lỗi server khi lấy dữ liệu bộ lọc", 500);
    }
};

// get books by hobby.
export const getFilteredBook = async (req, res) => {
    try {
        const data = await PopularService.getFilteredBooks(req.query);
        if (!data.success) {
            logger.error("getFilteredBook controller error: Bad Request");
            return Response.badRequest(res, "Bad Request", 400);
        }
        logger.info("getFilteredBook controller success: Lấy danh sách sách thành công");
        return Response.success(res, data.data, "Lấy danh sách sách thành công", 200);
    } catch (error) {
        logger.error("getFilteredBook controller error:", { error: error });
        // console.error(error);
        return Response.error(res, "Lỗi server khi lấy danh sách sách", 500);
    }
};


// input the search
export const handleSearchBooks = async (req, res) => {
    try {
        const q = req.query.q;
        const page = parseInt(req.query.page || 1);
        const limit = parseInt(req.query.limit || 5);

        // console.log("q", typeof (q), "page: ", Number.isInteger(page), "limit: ", Number.isInteger(limit))
        if (!q || q.trim() === "") { return Response.badRequest(res, "Thiếu từ khóa tìm kiếm", 400); }

        const data = await PopularService.searchBooks(q.trim(), page, limit);

        if (!data.success) {
            logger.error("handleSearchBooks controller error: Lấy dữ liệu không thành công");
            return Response.badRequest(res, "Lấy dữ liệu không thành công", 400);
        }

        logger.info("handleSearchBooks controller success: Tìm kiếm thành công");
        return Response.success(res, data.data, "Tìm kiếm thành công", 200);

    } catch (error) {
        logger.error("handleSearchBooks controller error:", { error: error });
        // console.error("Lỗi controllers:", error);
        return Response.error(res, "Lỗi server khi tìm kiếm sách", 500);
    }
};