import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH;
// export const generateToken = (user) => {
//     return jwt.sign({
//         user_id: user.user_id,
//         role: user.role,
//         username: user.name
//     }, JWT_SECRET, { expiresIn: "1h" });
// };

// export const generateResetToken = (user) => {
//     return jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: "15m" });
// };

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, JWT_SECRET_REFRESH);
}

// fix token.
export const generateAccessToken = (user) => {
    return jwt.sign({
        user_id: user.user_id,
        role: user.role
    }, JWT_SECRET, { expiresIn: "40m" });
}

export const generateRefreshToken = (user) => {
    return jwt.sign({ user_id: user.user_id }, JWT_SECRET_REFRESH, { expiresIn: "7d" });
}