import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { registerAPI } from "../../api/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const res = await registerAPI(name, email, password);
            setSuccess("Đăng ký thành công! Vui lòng đăng nhập.");
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Đăng ký thất bại");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
            <form onSubmit={handleRegister} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

                <div className="mb-4">
                    <label className="block text-sm mb-1">Họ và tên</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

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

                <div className="mb-4">
                    <label className="block text-sm mb-1">Mật khẩu</label>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
                >
                    {loading ? "Đang đăng ký..." : "Đăng ký"}
                </button>

                <div className="mt-4 text-sm text-center">
                    <Link to="/login" className="text-indigo-600 hover:underline">Quay lại đăng nhập</Link>
                </div>
            </form>
        </div>
    )
}