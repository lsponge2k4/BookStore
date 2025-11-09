// success - 200 
// created - 201
export const success = (res, data, message, status) => {
    return res.status(status).json({ success: true, status: "success", message, data });
};
// error - 500
export const error = (res, message, status) => {
    return res.status(status).json({ success: false, status: "error", message });
};

// bad request - 400
export const badRequest = (res, message, status) => {
    return res.status(status).json({ success: false, status: "Bad Request", message });
};


// forbidden - 403
export const forbidden = (res, message, status) => {
    return res.status(status).json({ success: false, status: "forbidden", message });
};