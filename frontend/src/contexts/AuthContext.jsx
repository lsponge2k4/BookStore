// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // check token.

    // Đọc token từ cookie
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    // Kiểm tra token khi load
    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            // Gọi API để lấy user info
            fetch('http://localhost:8080/api/user/login', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data) setUser({ ...data, token });
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        const res = await fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (res.ok && data.token) {
            document.cookie = `token=${data.token}; path=/; max-age=604800`; // 7 ngày
            const userData = { ...data.user, token: data.token };
            setUser(userData);

            // Nếu là admin → chuyển trang
            if (userData.role === 'admin') {
                window.location.href = '/admin';
            }

            return { success: true };
        } else {
            return { success: false, message: data.message || 'Đăng nhập thất bại' };
        }
    };

    const logout = () => {
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        setUser(null);
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);