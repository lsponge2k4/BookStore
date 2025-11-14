import multer from "multer";

// Chỉ lưu file vào memory trước
const storage = multer.memoryStorage();

const uploadCategoryImage = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png/;
        const isMimeType = allowed.test(file.mimetype);
        const isExt = allowed.test(file.originalname.toLowerCase());
        if (isMimeType && isExt) cb(null, true);
        else cb(new Error("Chỉ cho phép ảnh JPG, JPEG, PNG"));
    },
});

export default uploadCategoryImage;