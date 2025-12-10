import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../components/admin/ProtectedRoute";

export default function AdminRouter() {
    return (
        <Routes>
            <Route element={<ProtectedRoute role="admin"> <AdminLayout /></ProtectedRoute>}>
                <Route path="/admin" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}
