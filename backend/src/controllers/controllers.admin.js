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