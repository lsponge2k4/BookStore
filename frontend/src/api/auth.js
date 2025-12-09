import api from './api'

export const loginAPI = (email, password) => {
    return api.post("/api/user/login", { email, password });
}