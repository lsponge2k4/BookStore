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