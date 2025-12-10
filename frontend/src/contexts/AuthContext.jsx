// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { loginAPI, registerAPI, forgotPasswordAPI, resetPasswordAPI } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });

    const login = async (email, password) => {
        const res = await loginAPI(email, password);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setUser(res.data.user);

        return res.data.user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    const register = async (name, email, password) => {
        const res = await registerAPI(name, email, password);
        return res.data;
    };

    const forgotPassword = async (email) => {
        const res = await forgotPasswordAPI(email);
        return res.data;
    };

    const resetPassword = async (token, password) => {
        const res = await resetPasswordAPI(token, password);
        return res.data;
    };
    return (
        <AuthContext.Provider value={{ user, login, logout, register, forgotPassword, resetPassword }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
