import { Routes, Route } from "react-router-dom"
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home"
import Login from "../pages/user/Login"

export default function UserRouter() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Route>
        </Routes>
    )
}