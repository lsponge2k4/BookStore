import db from '../models/index';
import * as Helper from '../utils/helpers';
import { Sequelize } from "sequelize";
import path from "path";
import fs from "fs";

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

// update category.
// After need rollback (transaction) if can meet error this : 
/*
imagePath = Helper.saveFile(file, "image/categories");

            if (existingImage) {
                const oldFilePath = path.join(__dirname, "..", "public", existingImage.image_url);
                if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);

                existingImage.image_url = imagePath;
                await existingImage.save();
            } else {
                await db.Image.create({
                    entity_type: "category",
                    entity_id: category_id,
                    image_type: "main",
                    image_url: imagePath,
                });
            }
=> If in if(existingImage) not run or error, it will add imagePath= Helper.saveFile(file, "image/categories");
on server (This image will save in server)
*/
export const updateCategory = async (category_id, name, file) => {
    try {
        const category = await db.Category.findByPk(category_id);
        if (!category) { return { success: false, message: "Category không tồn tại" }; }

        if (name) { category.name = name.trim(); }
        await category.save();

        let imagePath = null;

        if (file) {
            const existingImage = await db.Image.findOne({
                where: { entity_type: "category", entity_id: category_id, image_type: "main" },
            });

            imagePath = Helper.saveFile(file, "image/categories");

            if (existingImage) {
                const oldFilePath = path.join(__dirname, "..", "public", existingImage.image_url);
                if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);

                existingImage.image_url = imagePath;
                await existingImage.save();
            } else {
                await db.Image.create({
                    entity_type: "category",
                    entity_id: category_id,
                    image_type: "main",
                    image_url: imagePath,
                });
            }
        }

        return {
            success: true,
            data: { category_id: category.category_id, name: category.name, image_url: imagePath },
            message: "Cập nhật danh mục thành công!",
        };
    } catch (err) {
        console.error("updateCategory service error:", err);
        return { success: false, message: "Lỗi khi cập nhật danh mục" };
    }
};

// delete category.

export const deleteCategory = async (category_id) => {
    try {
        const category = await db.Category.findByPk(category_id);
        if (!category) {
            return { success: false, message: "Danh mục không tồn tại!" };
        }

        const image = await db.Image.findOne({
            where: { entity_type: "category", entity_id: category_id },
        });

        if (image) {
            const filePath = path.join(__dirname, "..", "public", image.image_url);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            await image.destroy();
        }

        await category.destroy();

        return { success: true, message: "Xóa danh mục thành công!" };
    } catch (error) {
        console.error("deleteCategory error:", error);
        return { success: false, message: "Lỗi server khi xóa danh mục!" };
    }
};