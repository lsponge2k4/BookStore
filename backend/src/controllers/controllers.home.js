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
        console.log('check datatype of book_id: ' + Number.isInteger(book_id));
        if (!book_id) return Response.badRequest(res, 'book_id không được để trống', 400);

        const data = await HomeService.getBookById(book_id);
        if (!data.success) return Response.badRequest(res, data.message, 404);

        return Response.success(res, data.data, 'Lấy thông tin sách thành công', 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, 'Lỗi server', 500);
    }
};

// get detail the book by id

export const getBookDetails = async (req, res) => {
    try {

        const book_id = parseInt(req.query.id_book);
        console.log('check datatype of book_id: ' + Number.isInteger(book_id));
        if (!book_id) return Response.badRequest(res, "book_id không được để trống", 400);

        const data = await HomeService.getBookDetails(book_id);
        if (!data.success) return Response.badRequest(res, data.message, 404);

        return Response.success(res, data.data, "Lấy chi tiết sách thành công", 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, "Lỗi server", 500);
    }
};


// get books by category

export const getRelatedBook = async (req, res) => {
    try {
        const categoryId = parseInt(req.query.categoryId);
        const excludeBookId = parseInt(req.query.excludeBookId);
        const page = parseInt(req.query.page) || 2;
        const limit = parseInt(req.query.limit) || 5;
        // console.log('check datatype of book_id: ' + Number.isInteger(book_id));
        // console.log('check datatype of categoryId: ' + Number.isInteger(categoryId) + "value: " + categoryId);
        // console.log('check datatype of excludeBookId: ' + Number.isInteger(excludeBookId) + "value: " + excludeBookId);
        // console.log('check datatype of page: ' + Number.isInteger(page) + "value: " + page);
        // console.log('check datatype of limit: ' + Number.isInteger(limit) + "value: " + limit);

        if (!categoryId) return Response.badRequest(res, "Tham số categoryId còn bỏ sót giá trị!", 400);
        if (!excludeBookId) return Response.badRequest(res, "Tham số excludeBookId còn bỏ sót giá trị!", 400);
        if (!page) return Response.badRequest(res, "Tham số page còn bỏ sót giá trị!", 400);
        if (!limit) return Response.badRequest(res, "Tham số limit còn bỏ sót giá trị!", 400);

        // console.log('here');
        const data = await HomeService.getRelatedBooks(categoryId, excludeBookId, page, limit);
        if (!data.success) return Response.badRequest(res, data.message, 404);

        return Response.success(res, data.data, "Lấy sách thành công", 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, "Lỗi server", 500);
    }
};