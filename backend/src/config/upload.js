import multer from "multer";
import path from "path";
import fs from "fs";

// Tạo đường dẫn tuyệt đối 100% chính xác
const uploadPath = path.join(__dirname, "..", "public", "image", "users", "avatars");

// Nếu chưa có thì tạo folder
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log("✅ Folder created:", uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("📁 Save to:", uploadPath);  // Kiểm tra chính xác
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
        const allowedTypes = /jpeg|jpg|png/;
        const isMimeType = allowedTypes.test(file.mimetype);
        const isExtName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        if (isMimeType && isExtName) cb(null, true);
        else cb(new Error("Chỉ cho phép ảnh .jpg, .jpeg, .png"));
    },
});

export default uploadAvatar;
