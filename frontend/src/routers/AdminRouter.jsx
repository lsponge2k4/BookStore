import { Routers, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/Dashboard';

export default function AdminRouter() {
    return (
        <AdminLayout>
            <Routers>
                <Route path="/admin" element={<AdminDashboard />} />
            </Routers>
        </AdminLayout>
    )
}