import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// 👉 Tạo __dirname cho ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 Đường dẫn tuyệt đối 100% chính xác
const uploadPath = path.join(
    __dirname,
    "..",
    "public",
    "image",
    "users",
    "avatars"
);

// 👉 Nếu chưa có thì tạo folder
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log("✅ Folder created:", uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("📁 Save to:", uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const newName = Date.now() + path.extname(file.originalname);
        console.log("📸 New File:", newName);
        cb(null, newName);
    },
});

const uploadAvatar = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|webp/;
        const isMimeType = allowedTypes.test(file.mimetype);
        const isExtName = allowedTypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        if (isMimeType && isExtName) cb(null, true);
        else cb(new Error("Chỉ cho phép ảnh .jpg, .jpeg, .png, .webp"));
    },
});

export default uploadAvatar;
