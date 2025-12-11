import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import ManageThongKe from "../pages/admin/ManageThongKe";
import AdminPassword from "../pages/admin/AdminPassword";
import ManageBook from "../pages/admin/ManageBook";
import ManageCategory from "../pages/admin/ManageCategory";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageUsers from "../pages/admin/ManageUsers";

export default function AdminRouter() {
    return (
        <Routes>
            <Route element={<ProtectedRoute role="admin"> <AdminLayout /></ProtectedRoute>}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/changePassword" element={<AdminPassword />} />
                <Route path="/admin/manageUsers" element={<ManageUsers />} />
                <Route path="/admin/manageCategory" element={<ManageCategory />} />
                <Route path="/admin/manageBook" element={<ManageBook />} />
                <Route path="/admin/manageProduct" element={<ManageProducts />} />
                <Route path="/admin/manageThongKe" element={<ManageThongKe />} />
            </Route>
        </Routes>
    );
}
