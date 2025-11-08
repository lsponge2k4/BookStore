import Joi from "joi";

// validation for getFilteredBooks
export const checkGetFilteredBooks = Joi.object({
    categoryId: Joi.number().integer().min(1).optional()
        .messages({
            "number.base": "Category ID phải là số",
            "number.min": "Category ID không hợp lệ",
        }),

    author: Joi.string().trim().max(255).optional()
        .pattern(/^[a-zA-ZÀ-ỹ0-9\s.,&'"\-()/:%]*$/)
        .messages({
            "string.pattern.base": "Tên tác giả chứa ký tự không hợp lệ",
        }),

    publisher: Joi.string().trim().max(255).optional()
        .pattern(/^[a-zA-ZÀ-ỹ0-9\s.,&'"\-()/:%]*$/)
        .messages({
            "string.pattern.base": "Nhà xuất bản chứa ký tự không hợp lệ",
        }),

    minPrice: Joi.number().min(0).optional()
        .messages({
            "number.base": "Giá nhỏ nhất phải là số",
            "number.min": "Giá nhỏ nhất không được âm",
        }),

    maxPrice: Joi.number().min(0).optional()
        .messages({
            "number.base": "Giá lớn nhất phải là số",
            "number.min": "Giá lớn nhất không được âm",
        }),

    sort: Joi.string().valid("asc", "desc", "ASC", "DESC").optional()
        .messages({
            "any.only": "Chỉ chấp nhận sort = ASC hoặc DESC",
        }),

    page: Joi.number().integer().min(1).optional()
        .messages({
            "number.base": "Page phải là số nguyên dương",
            "number.min": "Page không hợp lệ",
        }),

    limit: Joi.number().integer().min(1).max(100).optional()
        .messages({
            "number.base": "Limit phải là số nguyên dương",
            "number.min": "Limit phải lớn hơn 0",
            "number.max": "Limit tối đa là 100",
        }),
})
    .custom((value, helpers) => {
        if (value.minPrice && value.maxPrice && value.minPrice > value.maxPrice) {
            return helpers.error("any.invalid", { message: "minPrice không được lớn hơn maxPrice" });
        }
        return value;
    })
    .messages({
        "any.invalid": "{{#message}}",
    });


// validation for checkSearchBooks

export const checkSearchBooks = Joi.object({
    q: Joi.string().trim().min(1).max(255).pattern(/^[a-zA-ZÀ-ỹ0-9\s.,&'"\-()/:%]*$/).required()
        .messages({
            "string.base": "Từ khóa tìm kiếm phải là chuỗi",
            "string.empty": "Từ khóa tìm kiếm không được để trống",
            "string.min": "Từ khóa tìm kiếm quá ngắn",
            "string.max": "Từ khóa tìm kiếm quá dài",
            "any.required": "Thiếu từ khóa tìm kiếm",
        }),

    page: Joi.number().integer().min(1).optional()
        .messages({
            "number.base": "Page phải là số nguyên dương",
            "number.min": "Page không hợp lệ",
        }),

    limit: Joi.number().integer().min(1).max(100).optional()
        .messages({
            "number.base": "Limit phải là số nguyên dương",
            "number.min": "Limit phải lớn hơn 0",
            "number.max": "Limit tối đa là 100",
        }),
});