// success - 200 
// created - 201
export const success = (res, data, message, status) => {
    return res.status(status).json({ status: "success", message, data });
};
// error - 500
export const error = (res, message, status) => {
    return res.status(status).json({ status: "error", message });
};

// bad request - 400
export const badRequest = (res, message, status) => {
    return res.status(status).json({ status: "Bad Request", message });
};
