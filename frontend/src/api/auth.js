import api from './api'

export const loginAPI = (email, password) => {
    return api.post("/api/user/login", { email, password });
}

export const registerAPI = (name, email, password) => {
    return api.post("/api/user/register", { name, email, password });
}

export const forgotPasswordAPI = (email) => {
    return api.post("/api/user/forgotPassword", { email });
}

export const resetPasswordAPI = (token, password) => {
    return api.post("/api/user/resetPassword", { token, password });
}