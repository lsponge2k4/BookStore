import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
export const generateToken = (user) => {
    return jwt.sign({
        user_id: user.user_id,
        role: user.role,
        username: user.name
    }, JWT_SECRET, { expiresIn: "1h" });
};

export const generateResetToken = (user) => {
    return jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: "15m" });
};

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};