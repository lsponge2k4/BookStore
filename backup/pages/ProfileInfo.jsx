// src/pages/ProfileInfo.jsx
import { useAuth } from '../contexts/AuthContext';

export default function ProfileInfo() {
    const { user } = useAuth();

    return (
        <div className="max-w-2xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-8">Thông tin cá nhân</h1>
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Họ tên</label>
                        <p className="mt-1 text-lg">{user?.name || 'Chưa cập nhật'}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-lg">{user?.email}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                        <p className="mt-1 text-lg capitalize">{user?.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}