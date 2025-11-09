import Joi from "joi";

// validation for addToCart

export const addToCartSchema = Joi.object({
    book_id: Joi.number().integer().positive().required().messages({
        "number.base": "ID sách phải là số",
        "number.integer": "ID sách phải là số nguyên",
        "number.positive": "ID sách phải lớn hơn 0",
        "any.required": "Không được để trống ID sách"
    }),
    quantity: Joi.number().integer().min(1).max(10).required().messages({
        "number.base": "Số lượng phải là số",
        "number.integer": "Số lượng phải là số nguyên",
        "number.min": "Số lượng tối thiểu là 1",
        "number.max": "Số lượng tối đa là 10",
        "any.required": "Số lượng không được để trống"
    })
});

// validation for remove a book from User's cart.

export const removeFromCartSchema = Joi.object({
    book_id: Joi.number().integer().positive().required().messages({
        "number.base": "ID sách phải là số",
        "number.integer": "ID sách phải là số nguyên",
        "number.positive": "ID sách phải lớn hơn 0",
        "any.required": "Không được để trống ID sách"
    })
});

// validation for increase or decrease from User's cart.

export const increaseOrDecreaseSchema = Joi.object({
    book_id: Joi.number().integer().positive().required().messages({
        "number.base": "ID sách phải là số",
        "number.integer": "ID sách phải là số nguyên",
        "number.positive": "ID sách phải lớn hơn 0",
        "any.required": "Không được để trống ID sách"
    })
});