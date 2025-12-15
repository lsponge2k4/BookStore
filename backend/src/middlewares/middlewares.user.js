import * as Response from "../utils/response.js";
import { generateAccessToken } from "../utils/token.js";
import { verifyToken, verifyRefreshToken } from "../utils/token.js";

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
    if (!token) { return Response.badRequest(res, "Token không được để trống", 400); }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch {
        return Response.badRequest(res, "Token không hợp lệ hoặc đã hết hạn", 401);
    }
};

// Check access token 
// export const isAuthenticated = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) { return Response.badRequest(res, 'Chưc xác thực!', 401); }

//     try {
//         const decoded = verifyToken(token);
//         console.log(">>> TOKEN PAYLOAD:", decoded);
//         req.user = decoded;
//         console.log(req.user);
//         const newToken = generateToken(req.user);
//         res.cookie("token", newToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "strict",
//             maxAge: 60 * 60 * 1000,
//         });
//         next();
//     } catch {
//         return Response.badRequest(res, 'Token không hợp lệ!', 401);
//     }
// };

// fix token issue
export const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return Response.badRequest(res, "Thiếu access token", 401);
    }

    try {
        const decoded = verifyToken(token);
        // console.log(">>> TOKEN PAYLOAD:", decoded);
        req.user = decoded;
        // console.log(req.user);
        next();
    } catch {
        return Response.badRequest(res, 'Token không hợp lệ!', 401);
    }
};

// refresh new token
export const refreshToken = (req, res) => {
    const refresh = req.cookies.refresh_token;
    if (!refresh) return Response.badRequest(res, "Không có refresh token", 401);

    try {
        const decoded = verifyRefreshToken(refresh);
        const newAccess = generateAccessToken(decoded);

        return Response.success(res, {
            accessToken: newAccess,
        }, "Tạo access token mới thành công", 200);
    } catch {
        return Response.badRequest(res, "Refresh token hết hạn", 401);
    }
};