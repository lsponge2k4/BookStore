import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
export const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        role: user.role,
        username: user.username
    }, JWT_SECRET, { expiresIn: "1h" });
};