import { generateToken } from '../utils/token';
import db from '../models/index';
import bcrypt from "bcryptjs";

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