
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