import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

export default function AdminRouter() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}
