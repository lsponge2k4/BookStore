import { BrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <UserRouter />
            <AdminRouter />
        </BrowserRouter >
    )
}