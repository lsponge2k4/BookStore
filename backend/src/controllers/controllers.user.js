import * as UserService from "../services/services.user";
import * as Response from "../utils/response";

// Register
export const register = async (req, res) => {
    try {
        const data = await UserService.registerUser(req.body);
        if (!data.success) {
            Response.badRequest(res, "Tạo tài khoản thất bại!", 400);
        }
        Response.success(res, data, "Tạo tài khoản thành công!", 201);
    } catch (error) {
        console.error("Lỗi controller:", error);
        Response.error(res, "Lỗi Server", 500);
    }
};