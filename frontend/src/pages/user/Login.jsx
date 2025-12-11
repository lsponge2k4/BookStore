import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { addToCartAPI } from "../../api/auth";
import toast from "react-hot-toast";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // cart
    const location = useLocation();
    const redirect = new URLSearchParams(location.search).get("redirect");
    const bookId = new URLSearchParams(location.search).get("bookId");
    const { from: Where } = location.state || {};

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const UserData = await login(email, password);
            if (!UserData) {
                setError("Đăng nhập thất bại");
                setLoading(false);
                return;
            }
            if (UserData.role == "admin") {
                navigate("/admin");
            } else if (UserData.role == "customer") {
                if (redirect === "addToCart" && bookId) {
                    try {
                        const res = await addToCartAPI(bookId, 1);
                        if (!res) return;
                        if (res.success) {
                            // alert("Đã thêm sản phẩm vào giỏ hàng.");
                            toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
                                duration: 3000, // 3 giây
                            });
                        }
                        else {
                            // alert("Thêm sản phẩm không thành công");
                            toast.error("Thêm sản phẩm không thành công!", {
                                duration: 3000,
                            });
                        }
                        navigate("/");
                    }
                    catch (err) {
                        console.log("err" + err);
                        alert("Có lỗi xảy ra.");
                    }
                }
                else if (Where) {
                    navigate(Where);
                }
                else {
                    navigate("/");
                }

            } else {
                navigate("/");
            }
        }
        catch (err) {
            setError(err.message);
        }

        setLoading(false);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Đăng Nhập</h2>
                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* Password */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Mật Khẩu</label>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
                >
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
                {/* Links: Register & Forgot Password */}
                <div className="flex justify-between mt-4 text-sm">
                    <Link to="/register" className="text-indigo-600 hover:underline">Đăng ký</Link>
                    <Link to="/forgot-password" className="text-indigo-600 hover:underline">Quên mật khẩu?</Link>
                </div>
            </form>
        </div>
    )
}
