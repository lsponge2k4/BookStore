import Joi from "joi";

// Part of Register 
export const checkRegister = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        "string.empty": "Tên không được để trống",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email là bắt buộc",
    }),
    password: Joi.string().min(6).max(50).required().messages({
        "string.min": "Mật khẩu tối thiểu 6 ký tự",
    }),
});

// Part of Log in

export const checkLogin = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email là bắt buộc",
    }),
    password: Joi.string().min(6).max(50).required().messages({
        "string.min": "Mật khẩu tối thiểu 6 ký tự",
        "any.required": "Mật khẩu là bắt buộc",
    }),
});