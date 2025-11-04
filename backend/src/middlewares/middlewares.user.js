export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ status: "error", message: "Chưa xác thực" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ status: "error", message: "Token không hợp lệ" });
    }
};


export const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") return res.status(403).json({ status: "error", message: "Không có quyền" });
    next();
};