import path from "path";
import fs from "fs";

// anonymous for email.
export const MaskEmail = (email) => {
    if (!email) {
        return "";
    }
    else {
        const [localPart, domain] = email.split("@");

        if (localPart.lenght <= 2) {
            return "*@" + domain;

        }
        else {
            const firstChar = localPart[0];
            const lastChar = localPart[localPart.length - 1];

            const mashed = firstChar + "*".repeat(localPart.length - 2) + lastChar;
            return mashed + "@" + domain;
        }
    }

}

// helper saveFile
export const saveFile = (file, folder) => {
    const uploadPath = path.join(__dirname, "..", "public", folder);
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

    const fileName = Date.now() + path.extname(file.originalname);
    const filePath = path.join(uploadPath, fileName);
    fs.writeFileSync(filePath, file.buffer); // ghi file
    return `/${folder}/${fileName}`;
};
