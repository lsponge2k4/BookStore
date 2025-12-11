import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}
