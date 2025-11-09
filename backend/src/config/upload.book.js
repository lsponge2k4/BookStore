import multer from "multer";

const storage = multer.memoryStorage();

const uploadBookImages = multer({
    storage,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB mỗi file
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png/;
        const isMimeType = allowed.test(file.mimetype);
        const isExt = allowed.test(file.originalname.toLowerCase());
        if (isMimeType && isExt) cb(null, true);
        else cb(new Error("Chỉ cho phép ảnh JPG, JPEG, PNG"));
    },
});

export default uploadBookImages;