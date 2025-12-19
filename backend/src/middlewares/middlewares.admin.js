import * as Response from "../utils/response.js";
import logger from "../config/logger.js";
// Part check for get. 
export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.query, { abortEarly: false });
        if (error) {
            const message = error.details.map((e) => e.message).join(", ");
            logger.error("Validation error:", { message: message });
            return Response.badRequest(res, message, 400);
        }
        next();
    };
};

// Part check for admin rule.
export const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        logger.error("isAdmin middleware error: Chỉ quản trị viên mới có quyền truy cập!");
        return Response.forbidden(res, "Chỉ quản trị viên mới có quyền truy cập!", 403);
    }
    next();
};
// Part check for body.
export const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details.map((e) => e.message).join(", ");
            logger.error("Validation error:", { message: message });
            return Response.badRequest(res, message, 400);
        }
        next();
    };
};
