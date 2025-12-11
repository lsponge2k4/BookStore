import { useEffect, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { getAllProductsInCartAPI } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login", { state: { from: "/cart" } });
            return;
        }
        const fetchCart = async () => {
            try {
                const res = await getAllProductsInCartAPI();
                setCartItems(res.data || []);
            } catch (err) {
                console.error("Không lấy được giỏ hàng", err);
            }
        }
        fetchCart();
    }, [user]);
    if (!user) return null
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.book_id}>
                            {item.title} x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}