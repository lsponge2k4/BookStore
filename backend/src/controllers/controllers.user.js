import * as UserService from "../services/services.user";
import * as Response from "../utils/response";

// Register
export const register = async (req, res) => {
    try {
        const data = await UserService.registerUser(req.body);
        if (!data.success) {
            Response.badRequest(res, "Tạo tài khoản thất bại!", 400);
        }
        Response.success(res, data.data, "Tạo tài khoản thành công!", 201);
    } catch (error) {
        console.error("Lỗi controller:", error);
        Response.error(res, "Lỗi Server", 500);
    }
};

// Log in
export const login = async (req, res) => {
    try {
        const data = await UserService.loginUser(req.body);
        if (!data.success) {
            return Response.badRequest(res, data.message, 400);
        }

        // Save token in cookie
        res.cookie("token", data.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });


        return Response.success(res, data.data, data.message, 200);
    } catch (error) {
        console.error("Lỗi controller:", error);
        return Response.error(res, "Lỗi Server", 500);
    }
};