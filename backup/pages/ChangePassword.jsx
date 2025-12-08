// src/pages/ChangePassword.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function ChangePassword() {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [message, setMessage] = useState('');
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPass !== confirmPass) {
            setMessage('Mật khẩu mới không khớp!');
            return;
        }

        // TODO: Gọi API đổi mật khẩu
        // const res = await fetch('/api/user/change-password', { ... })
        setMessage('Đổi mật khẩu thành công! (API chưa làm)');
    };

    return (
        <div className="max-w-md mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-8">Đổi mật khẩu</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mật khẩu cũ</label>
                    <input
                        type="password"
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                    <input
                        type="password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                    <input
                        type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg"
                        required
                    />
                </div>

                {message && <p className="text-sm text-center text-red-600">{message}</p>}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700"
                >
                    Cập nhật
                </button>
            </form>
        </div>
    );
}