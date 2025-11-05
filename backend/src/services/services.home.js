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