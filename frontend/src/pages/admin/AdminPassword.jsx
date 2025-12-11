import { useState } from "react";
import { changePasswordAPI } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function AdminPassword() {
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // state toggle cho từng input
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("Mật khẩu mới không khớp!");
            return;
        }

        setLoading(true);
        try {
            await changePasswordAPI(oldPassword, newPassword);
            setSuccess("Đổi mật khẩu thành công!");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");

            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(
                err.response?.data?.message ||
                err.message ||
                "Có lỗi xảy ra, kiểm tra console để biết chi tiết"
            );
        } finally {
            setLoading(false);
        }
    };

    // Hàm render icon mắt
    const EyeIcon = ({ visible }) => (
        visible ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.94 10.94 0 0112 20c-5 0-9.27-3-11-8a10.94 10.94 0 014.06-5.06M1 1l22 22" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
            </svg>
        )
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center mb-4">Đổi mật khẩu</h2>

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

                {/* Mật khẩu cũ */}
                <div className="mb-4 relative flex items-center">
                    <input
                        type={showOld ? "text" : "password"}
                        className="w-full border px-3 py-2 rounded pr-10"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="absolute right-2 h-full flex items-center justify-center text-gray-500 hover:text-gray-700"
                        onClick={() => setShowOld(!showOld)}
                    >
                        <EyeIcon visible={showOld} />
                    </button>
                </div>

                {/* Mật khẩu mới */}
                <div className="mb-4 relative flex items-center">
                    <input
                        type={showNew ? "text" : "password"}
                        className="w-full border px-3 py-2 rounded pr-10"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="absolute right-2 h-full flex items-center justify-center text-gray-500 hover:text-gray-700"
                        onClick={() => setShowNew(!showNew)}
                    >
                        <EyeIcon visible={showNew} />
                    </button>
                </div>

                {/* Xác nhận mật khẩu */}
                <div className="mb-4 relative flex items-center">
                    <input
                        type={showConfirm ? "text" : "password"}
                        className="w-full border px-3 py-2 rounded pr-10"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="absolute right-2 h-full flex items-center justify-center text-gray-500 hover:text-gray-700"
                        onClick={() => setShowConfirm(!showConfirm)}
                    >
                        <EyeIcon visible={showConfirm} />
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
                >
                    {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
                </button>
            </form>
        </div>
    );
}
