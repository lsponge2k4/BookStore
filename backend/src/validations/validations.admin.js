import Joi from "joi";

// validation page and limit for getAllUsers
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