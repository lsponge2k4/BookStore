import multer from "multer";

const storage = multer.memoryStorage();

const uploadBookImages = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 3MB mỗi file
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|webp/;
        const isMimeType = allowed.test(file.mimetype);
        const isExt = allowed.test(file.originalname.toLowerCase());
        if (isMimeType && isExt) cb(null, true);
        else cb(new Error("Chỉ cho phép ảnh JPG, JPEG, PNG, WEBP File"));
    },
});

export default uploadBookImages;