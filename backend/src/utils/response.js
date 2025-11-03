export const success = (res, data, message = "Thành công") => {
    return res.status(200).json({ status: "success", message, data });
};

export const error = (res, message = "Lỗi hệ thống", status = 500) => {
    return res.status(status).json({ status: "error", message });
};
