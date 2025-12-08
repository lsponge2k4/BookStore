import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
