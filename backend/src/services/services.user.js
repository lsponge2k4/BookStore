import { generateAccessToken, generateRefreshToken } from '../utils/token.js';
import db from '../dbBridge.js';
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/email.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// register 
export const registerUser = async ({ name, email, password }) => {
    // Check email
    const existing = await db.User.findOne({ where: { email } });
    if (existing) {
        return { success: false, message: "Email đã tồn tại" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.User.create({
        name,
        email,
        password: hashedPassword,
        role: "customer",
    });
    return {
        success: true,
        message: "Đăng ký thành công",
        data: { user_id: user.user_id, name: user.name, email: user.email },
    };
};


// log in
export const loginUser = async ({ email, password }) => {
    // Check user
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
        return { success: false, message: "Email không tồn tại" };
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { success: false, message: "Mật khẩu không chính xác" };
    }

    // Create token
    // const token = generateToken(user);


    const token = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        success: true,
        message: "Đăng nhập thành công",
        refreshToken: refreshToken,
        data: {
            token,
            user: {
                user_id: user.user_id,
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

    const token = generateAccessToken({ user_id: user.user_id });
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
    // console.log("server call id_user:" + userId);
    const user = await db.User.findByPk(userId);
    console.log("user" + user);
    if (!user) return { success: false, message: "User không tồn tại" };

    // get image of user

    const userImage = await db.Image.findOne({
        where: {
            entity_type: 'user',
            entity_id: user.user_id,
            image_type: 'avatar'
        }
    });
    const avatarUrl = userImage ? userImage.image_url : "/image/users/avatars/avatar_default.jpg";
    return {
        success: true, data: {
            user_id: user.user_id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: avatarUrl,
        }
    };
};


// Update the info of user.
export const updateUserProfile = async (userId, name, avatar) => {
    const user = await db.User.findByPk(userId);
    if (!user) return { success: false, message: "User không tồn tại" };

    if (name) user.name = name;
    else return { success: false, message: "Tên không được để trống" };

    if (avatar) {
        const existingImage = await db.Image.findOne({
            where: { entity_type: "user", entity_id: userId, image_type: "avatar" },
        });

        if (existingImage) {
            const oldFilePath = path.join(
                __dirname,
                "..",
                "public",
                existingImage.image_url
            );

            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
                console.log("Đã xóa ảnh cũ:", oldFilePath);
            } else {
                console.log("Không tìm thấy ảnh để xóa:", oldFilePath);
            }

            // Cập nhật ảnh mới trong DB
            existingImage.image_url = avatar;
            await existingImage.save();
        } else {
            // Nếu chưa có ảnh, tạo mới
            await db.Image.create({
                entity_type: "user",
                entity_id: userId,
                image_type: "avatar",
                image_url: avatar,
            });
        }
    }

    await user.save();

    return {
        success: true,
        data: {
            user_id: user.user_id,
            name: user.name,
            avatar,
        },
    };
};

// change password when logged in.
export const changeUserPassword = async (userId, oldPassword, newPassword) => {
    const user = await db.User.findByPk(userId);
    if (!user) return { success: false, message: "User không tồn tại" };

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return { success: false, message: "Mật khẩu cũ không chính xác" };

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return { success: true, message: "Đổi mật khẩu thành công" };
};