import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { resetPasswordAPI } from "../../api/auth";

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Mật khẩu không khớp!");
            return;
        }

        setLoading(true);
        try {
            await resetPasswordAPI(token, password);
            setMessage("Đổi mật khẩu thành công!");
            setPassword("");
            setConfirmPassword("");
        } catch (err) {
            setMessage(err.response?.data?.message || "Lỗi xảy ra");
        }
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded"
        >
            <h2 className="text-xl font-bold mb-4">Đặt lại mật khẩu</h2>

            {/* Mật khẩu mới */}
            <div className="mb-4 relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu mới"
                    className="w-full px-3 py-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>

            {/* Xác nhận mật khẩu */}
            <div className="mb-4 relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    className="w-full px-3 py-2 border rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded font-semibold"
            >
                {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
            </button>

            {message && <p className="mt-3 text-center text-red-600">{message}</p>}
        </form>
    );
}
