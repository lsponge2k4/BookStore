import { useState } from "react";
import { forgotPasswordAPI } from "../../api/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleForgot = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            await forgotPasswordAPI(email);
            setMessage("Email reset mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư.");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Gửi email thất bại");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
            <form onSubmit={handleForgot} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center mb-4">Quên Mật Khẩu</h2>

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                {message && <p className="text-green-600 text-sm mb-3">{message}</p>}

                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
                >
                    {loading ? "Đang gửi..." : "Gửi email"}
                </button>

                <div className="mt-4 text-sm text-center">
                    <Link to="/login" className="text-indigo-600 hover:underline">Quay lại đăng nhập</Link>
                </div>
            </form>
        </div>
    )
}
