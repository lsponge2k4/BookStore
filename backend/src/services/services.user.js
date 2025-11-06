import { generateToken, generateResetToken } from '../utils/token';
import db from '../models/index';
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/email.js";
import dotenv from "dotenv";
dotenv.config();

// register 
export const registerUser = async ({ name, email, password }) => {
    // kiểm tra email đã tồn tại chưa
    const existing = await db.User.findOne({ where: { email } });
    if (existing) {
        return { success: false, message: "Email đã tồn tại" };
    }
    // mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    // tạo user mới
    const user = await db.User.create({
        name,
        email,
        password: hashedPassword,
        role: "customer",
    });
    return {
        success: true,
        message: "Đăng ký thành công",
        data: { id: user.user_id, name: user.name, email: user.email },
    };
};


// log in
export const loginUser = async ({ email, password }) => {
    // Tìm user theo email
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
        return { success: false, message: "Email không tồn tại" };
    }
    // So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { success: false, message: "Mật khẩu không chính xác" };
    }

    // Tạo token
    const token = generateToken(user);

    // Trả về thông tin cần thiết
    return {
        success: true,
        message: "Đăng nhập thành công",
        data: {
            token,
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        },
    };
};


// Reset password when send email.
export const requestPasswordReset = async ({ email }) => {
    const user = await db.User.findOne({ where: { email } });
    if (!user) return { success: false, message: "Email không tồn tại" };

    const token = generateResetToken({ id: user.user_id });
    const resetLink = `${process.env.FRONTEND_URL}/resetPassword?token=${token}`;

    await sendEmail(user.email, "Reset mật khẩu", `Nhấn vào link để đổi mật khẩu: ${resetLink}`);

    return { success: true, message: "Vui lòng kiểm tra email để đổi mật khẩu" };
};

// Reset Password
export const resetPassword = async (userId, newPassword) => {
    const user = await db.User.findByPk(userId);
    if (!user) return { success: false, message: "User không tồn tại" };

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return { success: true, message: "Đổi mật khẩu thành công" };
};

// Get the info of user
export const getUserProfile = async (userId) => {
    console.log("server call id_user:" + userId);
    const user = await db.User.findByPk(userId);
    console.log("user" + user);
    if (!user) return { success: false, message: "User không tồn tại" };

    return {
        success: true, data: {
            id: user.user_id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
    };
};