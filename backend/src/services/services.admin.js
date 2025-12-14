import db from '../dbBridge.js';
import * as Helper from '../utils/helpers.js';
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


// get all categories.
export const getAllCategories = async (page = 1, limit = 20) => {
    try {
        const offset = (page - 1) * limit;

        const { count, rows } = await db.Category.findAndCountAll({
            attributes: [
                "category_id",
                "name",
                "createdAt",
                "updatedAt",
            ],
            include: [
                {
                    model: db.Image,
                    as: "Images",
                    attributes: ["image_url"],
                    where: { image_type: "main" },
                    required: false,
                },
            ],
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        });

        return {
            success: true,
            data: {
                total: count,
                page,
                limit,
                totalPages: Math.ceil(count / limit),
                categories: rows,
            },
            message: "Lấy danh sách danh mục thành công!",
        };
    } catch (error) {
        console.error("getAllCategories error:", error);
        return { success: false, message: "Lỗi server khi lấy danh mục!" };
    }
};

// get all books for admin.

export const getAllBooksAdmin = async (page, limit) => {
    const offset = (page - 1) * limit;

    const { rows: books, count: total } = await db.Book.findAndCountAll({
        offset,
        limit,
        order: [["createdAt", "DESC"]],
        include: [
            {
                model: db.Image,
                as: 'Images',
                where: { entity_type: 'book', /*image_type: 'cover',*/ },
                required: false,
            }, {
                model: db.Category,
                as: 'Category',
            },
        ],
        distinct: true,
    });
    const totalPages = Math.ceil(total / limit);

    return {
        books,
        pagination: {
            page,
            limit,
            total,
            totalPages,
        },
    };
};

// create a new book.
export const createBook = async (data, files) => {
    try {
        const newBook = await db.Book.create({
            title: data.title.trim(),
            author: data.author || null,
            publisher: data.publisher || null,
            price: data.price,
            stock: data.stock || 0,
            category_id: data.category_id || null,
            description: data.description || null,
        });

        let coverUrl = null;
        const galleryUrls = [];

        if (files.cover && files.cover.length > 0) {
            coverUrl = Helper.saveFile(files.cover[0], "image/books/covers");

            await db.Image.create({
                entity_type: "book",
                entity_id: newBook.book_id,
                image_type: "cover",
                image_url: coverUrl,
            });
        }

        if (files.gallery && files.gallery.length > 0) {
            for (const file of files.gallery) {
                const url = Helper.saveFile(file, "image/books/gallery");
                galleryUrls.push(url);

                await db.Image.create({
                    entity_type: "book",
                    entity_id: newBook.book_id,
                    image_type: "gallery",
                    image_url: url,
                });
            }
        }

        return {
            success: true,
            data: {
                book_id: newBook.book_id,
                title: newBook.title,
                cover: coverUrl,
                gallery: galleryUrls,
            },
            message: "Thêm sách thành công!",
        };
    } catch (error) {
        console.error("createBook error:", error);
        return { success: false, message: "Lỗi server khi thêm sách!" };
    }
};


// update a book.
// Have any errors need fix.

export const updateBook = async (book_id, body, files) => {
    try {
        const book = await db.Book.findByPk(book_id);
        if (!book) return { success: false, message: "Không tìm thấy sách!" };

        await book.update(body);

        if (files && files.cover && files.cover.length > 0) {
            const file = files.cover[0];
            const coverPath = Helper.saveFile(file, "image/books/covers");

            const oldCover = await db.Image.findOne({
                where: {
                    entity_type: "book",
                    entity_id: book.book_id,
                    image_type: "cover",
                },
            });

            if (oldCover) {
                const oldFilePath = path.join(__dirname, "..", "public", oldCover.image_url);
                if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
                await oldCover.destroy();
            }

            await db.Image.create({
                entity_type: "book",
                entity_id: book.book_id,
                image_type: "cover",
                image_url: coverPath,
            });
        }

        if (files && files.gallery && files.gallery.length > 0) {
            const oldGallery = await db.Image.findAll({
                where: {
                    entity_type: "book",
                    entity_id: book.book_id,
                    image_type: "gallery",
                },
            });

            for (const img of oldGallery) {
                const oldFilePath = path.join(__dirname, "..", "public", img.image_url);
                if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
            }

            await db.Image.destroy({
                where: {
                    entity_type: "book",
                    entity_id: book.book_id,
                    image_type: "gallery",
                },
            });

            for (const file of files.gallery) {
                const galleryPath = Helper.saveFile(file, "image/books/gallery");
                await db.Image.create({
                    entity_type: "book",
                    entity_id: book.book_id,
                    image_type: "gallery",
                    image_url: galleryPath,
                });
            }
        }

        return {
            success: true,
            data: book,
            message: "Cập nhật sách thành công!",
        };
    } catch (error) {
        console.error("updateBook error:", error);
        return { success: false, message: "Lỗi server khi cập nhật sách!" };
    }
};

// delete a book.
// need to update more.
export const deleteBook = async (book_id) => {
    try {
        const book = await db.Book.findByPk(book_id);
        if (!book) return { success: false, message: "Không tìm thấy sách!" };

        const images = await db.Image.findAll({
            where: { entity_type: "book", entity_id: book_id },
        });

        for (const img of images) {
            const filePath = path.join(__dirname, "..", "public", img.image_url);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }

        await db.Image.destroy({
            where: { entity_type: "book", entity_id: book_id },
        });

        await book.destroy();

        return { success: true, message: "Xóa sách thành công!" };
    } catch (error) {
        console.error("deleteBook error:", error);
        return { success: false, message: "Lỗi server khi xóa sách!" };
    }
};