import { BrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";
import { AuthProvider } from "../contexts/AuthContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <UserRouter />
                <AdminRouter />
            </AuthProvider>
        </BrowserRouter >
    )
}