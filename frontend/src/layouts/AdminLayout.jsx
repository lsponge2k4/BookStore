// src/layouts/AdminLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>

        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Manage Users
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
            }
          >
            Manage Products
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* nội dung từng trang admin */}
      </main>
    </div>
  );
}

export default AdminLayout;
