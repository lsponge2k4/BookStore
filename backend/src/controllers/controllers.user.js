import * as UserService from "../services/services.user";
import * as Response from "../utils/response";

// Register
export const register = async (req, res) => {
    try {
        const data = await UserService.registerUser(req.body);
        if (!data.success) {
            return Response.badRequest(res, "Tạo tài khoản thất bại!", 400);
        }
        return Response.success(res, data.data, "Tạo tài khoản thành công!", 201);
    } catch (error) {
        console.error("Lỗi controller:", error);
        return Response.error(res, "Lỗi Server", 500);
    }
};

// Log in
export const login = async (req, res) => {
    try {
        console.log("Here1:", req.body);
        const data = await UserService.loginUser(req.body);
        if (!data.success) {
            return Response.badRequest(res, data.message, 400);
        }

        res.cookie("refresh_token", data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        });
        const responseData = { token: data.data.token, user: data.data.user };

        return Response.success(res, responseData, data.message, 200);
    } catch (error) {
        console.error("Lỗi controller:", error);
        return Response.error(res, "Lỗi Server", 500);
    }
};


// Send email reset password
export const forgotPassword = async (req, res) => {
    try {
        const data = await UserService.requestPasswordReset(req.body);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }
        return Response.success(res, data.message, "Gửi email thành công!", 200);
    } catch (error) {
        console.error("Lỗi controller:", error);
        return Response.error(res, "Lỗi server", 500);
    }
};

// Reset password
export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.user.user_id;
        const data = await UserService.resetPassword(userId, password);
        if (!data.success) { return Response.badRequest(res, data.message); }
        return Response.success(res, data.data, "Đổi mật khẩu thành công!", 200);
    } catch (err) {
        return Response.error(res, "Lỗi server", 500);
    }
};



// Get the info of user
export const getProfile = async (req, res) => {
    try {
        // console.log("controller call id_user:" + req.user.id);
        const data = await UserService.getUserProfile(req.user.user_id);
        if (!data.success) { return Response.badRequest(res, data.message, 404); }
        return Response.success(res, data.data, "Lấy thông tin thành công", 200);
    } catch (err) {
        return Response.error(res, "Lỗi server", 500);
    }
};

// Update profile (name + avatar)
export const updateProfile = async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File uploaded:", req.file);

        const { name } = req.body;
        const userId = req.user.user_id;

        const avatar = req.file ? `/image/users/avatars/${req.file.filename}` : null;

        const data = await UserService.updateUserProfile(userId, name, avatar);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, data.data, "Cập nhật thành công!", 200);
    } catch (err) {
        console.error(err);
        return Response.error(res, "Lỗi server", 500);
    }
};

//changePassword
export const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user.user_id;

        const data = await UserService.changeUserPassword(userId, oldPassword, newPassword);
        if (!data.success) { return Response.badRequest(res, data.message, 400); }

        return Response.success(res, null, "Đổi mật khẩu thành công!", 200);
    } catch (err) {
        console.error("Lỗi changePassword:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};

// log out
export const logout = async (req, res) => {
    try {
        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        return Response.success(res, null, "Đăng xuất thành công!", 200);
    } catch (err) {
        console.error("Lỗi logout:", err);
        return Response.error(res, "Lỗi server", 500);
    }
};