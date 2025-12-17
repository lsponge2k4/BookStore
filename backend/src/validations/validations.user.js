import Joi from "joi";

// Part of Register 
export const checkRegister = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        "string.empty": "Tên không được để trống",
        "string.min": "Tên phải ít nhất 3 kí tự",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email là bắt buộc",
    }),
    password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp("(?=.*[a-z])"))
        .pattern(new RegExp("(?=.*[A-Z])"))
        .pattern(new RegExp("(?=.*[0-9])"))
        .pattern(new RegExp("(?=.*[!@#$%^&*])"))
        .required()
        .messages({
            "string.empty": "Mật khẩu không được để trống",
            "string.min": "Mật khẩu tối thiểu 8 ký tự",
            "string.pattern.base":
                "Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt (!@#$%^&*)",
        }),
});

// Part of Log in
export const checkLogin = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email là bắt buộc",
    }),
    password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp("(?=.*[a-z])"))
        .pattern(new RegExp("(?=.*[A-Z])"))
        .pattern(new RegExp("(?=.*[0-9])"))
        .pattern(new RegExp("(?=.*[!@#$%^&*])"))
        .required()
        .messages({
            "string.empty": "Mật khẩu không được để trống",
            "string.min": "Mật khẩu tối thiểu 8 ký tự",
            "string.pattern.base":
                "Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt (!@#$%^&*)",
        }),
});

// Forget password
export const checkForgotPassword = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "any.required": "Email là bắt buộc",
    }),
});

// Reset password
export const checkResetPassword = Joi.object({
    token: Joi.string().required().messages({
        "string.empty": "Token không được để trống",
    }),
    password: Joi.string()
        .min(8)
        .max(50)
        .pattern(new RegExp("(?=.*[a-z])"))
        .pattern(new RegExp("(?=.*[A-Z])"))
        .pattern(new RegExp("(?=.*[0-9])"))
        .pattern(new RegExp("(?=.*[!@#$%^&*])"))
        .required()
        .messages({
            "string.empty": "Mật khẩu không được để trống",
            "string.min": "Mật khẩu tối thiểu 8 ký tự",
            "string.pattern.base":
                "Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt (!@#$%^&*)",
        }),
});

// Change password 
export const checkChangePassword = Joi.object({
    oldPassword: Joi.string().min(6).required().messages({
        "string.empty": "Mật khẩu cũ không được để trống",
        "string.min": "Mật khẩu cũ tối thiểu 6 ký tự",
    }),
    newPassword: Joi.string().min(6).required().messages({
        "string.empty": "Mật khẩu mới không được để trống",
        "string.min": "Mật khẩu mới tối thiểu 6 ký tự",
    }),
});