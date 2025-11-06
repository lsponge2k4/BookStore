import * as Response from "../utils/response.js";
import { generateToken } from "../utils/token.js";
import { verifyToken } from "../utils/token.js";

// Part of Register and Login
export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        // console.log(Array.isArray(error.details));
        if (error) {
            const message = error.details.map((e) => e.message).join(", ");
            return Response.badRequest(res, message, 400);
        }
        next();
    };
};

// Check JWT reset password
export const verifyResetToken = (req, res, next) => {
    const token = req.body.token || req.query.token;
    if (!token) return Response.badRequest(res, "Token không được để trống", 400);

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        return Response.badRequest(res, "Token không hợp lệ hoặc đã hết hạn", 400);
    }
};

// Check access token 
export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return Response.badRequest(res, 'Chưc xác thực!', 401);

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        // console.log(req.user);
        const newToken = generateToken(req.user);
        res.cookie("token", newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        });
        next();
    } catch {
        return Response.badRequest(res, 'Token không hợp lệ!', 401);
    }
};

// export const isAdmin = (req, res, next) => {
//     if (req.user.role !== "admin") return res.status(403).json({ status: "error", message: "Không có quyền" });
//     next();
// };