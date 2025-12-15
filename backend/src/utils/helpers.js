import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// mask email
export const MaskEmail = (email) => {
    if (!email) return "";

    const [localPart, domain] = email.split("@");

    if (localPart.length <= 2) return "*@" + domain;

    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];
    return firstChar + "*".repeat(localPart.length - 2) + lastChar + "@" + domain;
};

// save file
export const saveFile = (file, folder) => {
    const uploadPath = path.join(__dirname, "..", "public", folder);
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

    const fileName = Date.now() + path.extname(file.originalname);
    const filePath = path.join(uploadPath, fileName);
    fs.writeFileSync(filePath, file.buffer);
    return `/${folder}/${fileName}`;
};
