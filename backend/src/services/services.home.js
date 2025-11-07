import db from '../models/index';

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
                where: { entity_type: 'book' },
                required: false,
            }
        ],
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