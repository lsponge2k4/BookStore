import db from '../models/index';
import * as Helper from '../utils/helpers';
import { Sequelize } from "sequelize";
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

// create new category.

export const createCategory = async (name, file) => {
    try {
        const existing = await db.Category.findOne({
            where: Sequelize.where(
                Sequelize.fn("LOWER", Sequelize.col("name")),
                name.trim().toLowerCase()
            ),
        });
        if (existing) return { success: false, message: "Danh mục đã tồn tại!" };

        const newCategory = await db.Category.create({ name: name.trim() });

        let imagePath = null;
        if (file) {

            imagePath = Helper.saveFile(file, "image/categories");

            await db.Image.create({
                entity_type: "category",
                entity_id: newCategory.category_id,
                image_type: "main",
                image_url: imagePath,
            });
        }

        return {
            success: true,
            data: { category_id: newCategory.category_id, name: newCategory.name, image_url: imagePath },
            message: "Thêm danh mục thành công!",
        };
    } catch (error) {
        console.error("createCategory error:", error);
        return { success: false, message: "Lỗi server khi thêm danh mục!" };
    }
};