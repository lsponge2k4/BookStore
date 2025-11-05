import { generateToken } from '../utils/token';
import db from '../models/index';
import bcrypt from "bcryptjs";

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