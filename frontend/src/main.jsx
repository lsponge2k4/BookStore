import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import LocationPage from "./components/user/Location.jsx";
import InformationPage from "./components/user/information.jsx";
import { RegisterPage } from "./pages/Register.jsx";
import PopularPage from "./components/user/Popular.jsx";
import { LoginPage } from "./pages/login.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "popular",
        element: <PopularPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "location",
        element: <LocationPage />,
      },
      {
        path: "information",
        element: <InformationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // layout admin riêng
    // children: [
    //   { index: true, element: <Dashboard /> },
    //   { path: "dashboard", element: <Dashboard /> },
    //   { path: "users", element: <ManageUsers /> },
    //   { path: "products", element: <ManageProducts /> },
    // ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
