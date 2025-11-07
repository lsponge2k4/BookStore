import db from '../models/index';
import { Op, fn, col } from "sequelize"


export const getFilterOptions = async () => {
    const [authors, publishers, priceRange] = await Promise.all([
        db.Book.findAll({
            attributes: [[fn("DISTINCT", col("author")), "author"]],
            raw: true,
        }),

        db.Book.findAll({
            attributes: [[fn("DISTINCT", col("publisher")), "publisher"]],
            raw: true,
        }),

        db.Book.findOne({
            attributes: [
                [fn("MIN", col("price")), "min_price"],
                [fn("MAX", col("price")), "max_price"],
            ],
            raw: true,
        }),
    ]);

    const categories = await db.Category.findAll({
        attributes: ["category_id", "name"],
        raw: true,
    });

    const authorFiltered = authors.map((a) => a.author).filter(Boolean);
    const publisherFiltered = publishers.map((p) => p.publisher).filter(Boolean);

    return {
        success: true,
        data: {
            authors: authorFiltered,
            publishers: publisherFiltered,
            categories,
            priceRange,
        }
    };
};

// get books by hobby.
export const getFilteredBooks = async (filters) => {
    const {
        categoryId,
        author,
        publisher,
        minPrice,
        maxPrice,
        sort = "desc",
        page = 1,
        limit = 5,
    } = filters;

    const where = {};

    if (categoryId) where.category_id = categoryId;
    if (author) where.author = author;
    if (publisher) where.publisher = publisher;
    if (minPrice || maxPrice) {
        where.price = {};
        if (minPrice) where.price[Op.gte] = Number(minPrice);
        if (maxPrice) where.price[Op.lte] = Number(maxPrice);
    }

    const offset = (page - 1) * limit;

    const { rows: books, count } = await db.Book.findAndCountAll({
        where,
        include: [
            {
                model: db.Image,
                as: 'Images',
                attributes: ['image_url', 'image_type'],
                required: false,
                where: {
                    entity_type: 'book', image_type: 'cover',
                },
            },
        ],
        order: [["createdAt", sort.toUpperCase() === "ASC" ? "ASC" : "DESC"]],
        limit: Number(limit),
        offset,
        raw: false,
    });

    return {
        success: true,
        data: {
            totalBooks: count,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
            books,
        }
    };
};