import db from '../dbBridge.js';
// import { success } from '../utils/response';

export const getAllBooks = async (page, limit) => {
    const offset = (page - 1) * limit;

    const { rows: books, count: total } = await db.Book.findAndCountAll({
        offset,
        limit,
        order: [["createdAt", "DESC"]],
        include: [
            {
                model: db.Image,
                as: 'Images',
                where: { entity_type: 'book', image_type: 'cover', },
                required: false,
            }, {
                model: db.Category,
                as: 'Category',
            },
            {
                model: db.Review,
                as: 'Reviews',
                required: false,
                attributes: ["review_id", "book_id", "rating", "comment", "createdAt", "updatedAt"],
                include: [{ model: db.User, as: 'User', attributes: ["name"] }],

            }
        ],
    });
    // if none image, get the default image.
    // const booksWithCover = books.map(b => {
    //     const cover = b.Images?.[0]?.image_url || "/image/books/covers/book_default.png";
    //     return { ...b.toJSON(), cover };
    // });
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


// get the book with id

export const getBookById = async (bookId) => {
    const book = await db.Book.findByPk(bookId, {
        include: [
            {
                model: db.Image,
                as: 'Images',
                where: { entity_type: 'book' },
                required: false,
            }, {
                model: db.Category,
                as: 'Category',
            }]
    });

    if (!book) {
        return { success: false, message: 'Sách không tồn tại' };
    }

    book.Images = book.Images?.map(img => img.image_url) || ['/image/books/covers/book_default.png'];

    return { success: true, data: book };
};


// get detail the book by id
export const getBookDetails = async (bookId) => {

    // Lấy sách theo id, bao gồm category, review, hình ảnh
    const book = await db.Book.findByPk(bookId, {
        include: [
            { model: db.Category, as: "Category" },
            {
                model: db.Review,
                as: "Reviews",
                attributes: ["review_id", "book_id", "rating", "comment", "createdAt", "updatedAt"],
                include: [{ model: db.User, attributes: ["name"] }],
            },
            {
                model: db.Image,
                as: "Images",
                required: false,
            },
        ],
    });
    // console.log("book:" + book);
    if (!book) return { success: false, message: "Book không tồn tại" };

    // Get other books in category together.
    let relatedBooks = [];
    if (book.category_id) {
        relatedBooks = await db.Book.findAll({
            where: {
                category_id: book.category_id,
                book_id: { [db.Sequelize.Op.ne]: bookId },
            },
            include: [
                {
                    model: db.Image,
                    as: "Images",
                    attributes: ["image_url", "image_type"],
                    required: false,
                    where: { image_type: 'cover' },
                },
            ],
            order: [["createdAt", "DESC"]],
            limit: 5,
        });

        relatedBooks = relatedBooks.map((b) => {
            b.Images = b.Images?.map((img) => img.image_url) || ["/image/books/covers/book_default.png"];
            return b;
        });
    }

    book.Images = book.Images?.map((img) => img.image_url) || ["/image/books/covers/book_default.png"];

    return { success: true, data: { book, relatedBooks } };
};


// get books by category

export const getRelatedBooks = async (categoryId, excludeBookId, page, limit) => {
    const offset = (page - 1) * limit;

    const { rows: books, count: total } = await db.Book.findAndCountAll({
        where: {
            category_id: categoryId,
            book_id: { [db.Sequelize.Op.ne]: excludeBookId },
        },
        offset,
        limit,
        order: [["createdAt", "DESC"]],
        include: [
            {
                model: db.Image,
                as: 'Images',
                required: false,
                where: { image_type: 'cover' },
            },
        ],
    });

    // const booksWithCover = books.map(b => {
    //     const cover = b.Images?.[0]?.image_url || "/image/books/covers/book_default.png";
    //     return { ...b.toJSON(), cover };
    // });

    const totalPages = Math.ceil(total / limit);

    return {
        success: true,
        data: {
            books,
            pagination: {
                page,
                limit,
                total,
                totalPages,
            },
        },
    };
};