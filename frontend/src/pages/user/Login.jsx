import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
            navigate("/");
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

            </form>
        </div>
    )
}
