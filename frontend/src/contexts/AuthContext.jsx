// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import {
    loginAPI, registerAPI, forgotPasswordAPI, resetPasswordAPI, getUserInfoAPI, addToCartAPI, getAllProductsInCartAPI,
    increaseQuantityAPI, decreaseQuantityAPI, removeABookAPI
} from "../api/auth";
import toast from "react-hot-toast";
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });
    const [cartCount, setCartCount] = useState(0);
    const [userInfo, setUserInfo] = useState(null);

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

    const fetchUserInfo = async () => {
        try {
            const res = await getUserInfoAPI();
            if (res.data) {
                setUserInfo(res.data);
                return res.data;
            }
        } catch (err) {
            console.error(err);

            if (err.message.includes("Phiên đăng nhập hết hạn")) {
                // alert("Phiên đăng nhập hết hạn")
                logout();
                window.location.href = "/login";
            }
        }
        return null;
    };
    // Lấy số lượng giỏ hàng. 
    const fetchCartCount = async () => {
        if (!user) {
            setCartCount(0);
            return;
        }
        try {
            const res = await getAllProductsInCartAPI();
            setCartCount(res.data?.reduce((sum, item) => sum + item.quantity, 0) || 0);
        } catch (err) {
            console.error("Không lấy được giỏ hàng", err);
            setCartCount(0);
        }
    }
    // Giỏ hàng
    const addToCart = async (book_id, quantity = 1, loc) => {
        if (!user) {
            window.location.href = `/login?redirect=addToCart&bookId=${book_id}&loc=${loc}`;
            return;
        }
        try {
            const res = await addToCartAPI(book_id, quantity);
            await fetchCartCount();
            return res;
        } catch (err) {
            // alert("Không thể thêm giỏ hàng: " + err.message);
            toast.error(`Không thể thêm giỏ hàng: ${err.message}`, {
                duration: 3000,
            });
        }
    }
    const increaseQuantity = async (book_id) => {
        try {
            const res = await increaseQuantityAPI(book_id);
            await fetchCartCount();
            return res;
        } catch (err) {
            console.error(err);
            toast.error("Không thể tăng số lượng!", { duration: 3000 });
        }
    };

    const decreaseQuantity = async (book_id) => {
        try {
            const res = await decreaseQuantityAPI(book_id);
            await fetchCartCount();
            return res;
        } catch (err) {
            console.error(err);
            toast.error("Không thể giảm số lượng!", { duration: 3000 });
        }
    };

    const removeABook = async (book_id) => {
        try {
            const res = await removeABookAPI(book_id);
            await fetchCartCount();
            return res;
        } catch (err) {
            console.error(err);
            toast.error("Không thể xoá sản phẩm!", { duration: 3000 });
        }
    };
    return (
        <AuthContext.Provider value={{
            user, cartCount, userInfo, login, logout, register, forgotPassword, resetPassword, fetchUserInfo, addToCart, fetchCartCount,
            increaseQuantity, decreaseQuantity, removeABook

        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
