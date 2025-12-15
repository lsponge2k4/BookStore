import { useEffect, useState } from "react";
import { getUserInfoAPI, updateUserInfoAPI } from "../../api/auth";
const API_URL = import.meta.env.VITE_API_URL;
export default function Profile() {
    const [userInfo, setUserInfo] = useState(null);
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [previewAvatar, setPreviewAvatar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserInfoAPI();
                if (res.data) {
                    setUserInfo(res.data);
                    setName(res.data.name);
                }
            } catch (err) {
                console.error(err);
                setError("Không thể lấy thông tin người dùng");
            }
        };
        fetchUser();
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setPreviewAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", name);
            if (avatar) formData.append("avatar", avatar);

            const res = await updateUserInfoAPI(formData);

            setUserInfo(prev => ({
                ...prev,
                name: res.data.name || prev.name,
                avatar: res.data.avatar || prev.avatar
            }));

            setPreviewAvatar(null);
            setSuccess("Cập nhật thành công!");
            window.location.reload();
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Có lỗi xảy ra");
        } finally {
            setLoading(false);
        }
    };

    if (!userInfo) {
        return (<div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
        </div>)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Thông tin cá nhân</h2>

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

                {/* Avatar */}
                <div className="mb-4 flex flex-col items-center relative">
                    <img
                        src={previewAvatar || `${API_URL}${userInfo.avatar}`}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover mb-2 border"
                    />
                    <label className="cursor-pointer px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">
                        Chọn ảnh
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatarChange}
                        />
                    </label>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Họ và tên</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded bg-gray-100"
                        value={userInfo.email}
                        disabled
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
                >
                    {loading ? "Đang cập nhật..." : "Cập nhật thông tin"}
                </button>
            </form>
        </div>
    );
}
