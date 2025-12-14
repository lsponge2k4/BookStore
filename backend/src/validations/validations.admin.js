import Joi from "joi";

// validation page and limit for getAllUsers and AllBooks.
export const validGetAllUsers = Joi.object({
    page: Joi.number().integer().min(1).optional()
        .messages({
            "number.base": "Page phải là số nguyên dương",
            "number.min": "Page không hợp lệ",
            "number.integer": "Page phải là số nguyên",
        }),

    limit: Joi.number().integer().min(1).max(100).optional()
        .messages({
            "number.base": "Limit phải là số nguyên dương",
            "number.min": "Limit phải lớn hơn 0",
            "number.max": "Limit tối đa là 100",
            "number.integer": "Limit phải là số nguyên",
        }),
});


// validation when create new category.
export const checkCreateCategory = Joi.object({
    name: Joi.string().trim().min(3).max(100).pattern(/^[A-Za-zÀ-ỹ0-9\s]+$/u).required().messages({
        "string.empty": "Tên danh mục không được để trống",
        "string.min": "Tên danh mục phải có ít nhất 3 ký tự",
        "string.max": "Tên danh mục tối đa 100 ký tự",
        "string.pattern.base": "Tên danh mục chỉ được chứa chữ, số và khoảng trắng",
    }),
});

// validation when update new category.
export const checkUpdateCategory = Joi.object({
    category_id: Joi.number().integer().required().messages({
        "any.required": "category_id không được để trống",
        "number.base": "category_id phải là số",
    }),
    name: Joi.string().trim().min(3).max(100).pattern(/^[A-Za-zÀ-ỹ0-9\s]+$/u).required().messages({
        "string.empty": "Tên danh mục không được để trống",
        "string.min": "Tên danh mục phải có ít nhất 3 ký tự",
        "string.max": "Tên danh mục tối đa 100 ký tự",
        "string.pattern.base": "Tên danh mục chỉ được chứa chữ, số và khoảng trắng",
    }),
});

// validation when get all categories.
export const checkGetAllCategories = Joi.object({
    page: Joi.number().integer().min(1).optional().messages({
        "number.base": "Page phải là số nguyên",
        "number.min": "Page phải >= 1",
    }),
    limit: Joi.number().integer().min(1).max(100).optional().messages({
        "number.base": "Limit phải là số nguyên",
        "number.min": "Limit phải >= 1",
        "number.max": "Limit tối đa là 100",
    }),
});

// validation when create a new book.

const textPattern = /^[a-zA-ZÀ-ỹ0-9\s.,&'"“”\-()/:%…–!?]*$/;

export const checkCreateBook = Joi.object({
    title: Joi.string().trim().min(3).max(200).pattern(textPattern).required().messages({
        "string.empty": "Tên sách không được để trống",
        "string.min": "Tên sách phải có ít nhất 3 ký tự",
        "string.max": "Tên sách tối đa 200 ký tự",
        "string.pattern.base": "Tên sách chứa ký tự không hợp lệ",
    }),
    author: Joi.string().trim().max(100).pattern(textPattern).optional().messages({
        "string.pattern.base": "Tên tác giả chứa ký tự không hợp lệ",
    }),
    publisher: Joi.string().trim().max(255).pattern(textPattern).optional().messages({
        "string.pattern.base": "Tên nhà xuất bản chứa ký tự không hợp lệ",
    }),
    price: Joi.number().min(0).required().messages({
        "number.base": "Giá sách phải là số",
        "number.min": "Giá sách không được nhỏ hơn 0",
    }),
    stock: Joi.number().integer().min(0).optional().messages({
        "number.base": "Số lượng phải là số nguyên",
        "number.min": "Số lượng không được nhỏ hơn 0",
    }),
    category_id: Joi.number().integer().optional().messages({
        "number.base": "category_id phải là số nguyên",
    }),
    description: Joi.string().trim().max(2000).pattern(textPattern).optional().messages({
        "string.pattern.base": "Mô tả chứa ký tự không hợp lệ",
        "string.max": "Mô tả tối đa 1000 ký tự",
    }),
});