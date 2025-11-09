import db from '../models/index';
import * as Helper from '../utils/helpers';

// get all users for admin.
export const getAllUsers = async (page, limit) => {
    try {
        const offset = (page - 1) * limit;

        const { count, rows } = await db.User.findAndCountAll({
            attributes: [/*"user_id",*/ "name", "email", "role", "createdAt"],
            where: { role: "customer" },
            order: [["createdAt", "DESC"]],
            limit,
            offset,
        });
        if (rows.length === 0) {
            return {
                success: true,
                data: { users: [], pagination: { totalUsers: 0, totalPages: 0, currentPage: page } },
                message: "Không có người dùng!",
            };
        }
        // console.log("rows", rows);
        // mask email.
        const users = rows.map(user => ({
            ...user.toJSON(), email: Helper.MaskEmail(user.email)
        }))

        return {
            success: true,
            data: {
                users: users,
                pagination: {
                    totalUsers: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                },
            },
            message: "Lấy danh sách người dùng thành công!",
        };
    } catch (error) {
        console.error("getAllUsers error:", error);
        return { success: false, message: "Lỗi server khi lấy danh sách người dùng" };
    }
};