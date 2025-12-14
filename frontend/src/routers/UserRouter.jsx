import { Routes, Route } from "react-router-dom"
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home"
import Login from "../pages/user/Login"
import Register from "../pages/user/Register";
import ForgotPassword from "../pages/user/ForgotPassword";
import ResetPassword from "../pages/user/ResetPassword";
import ChangePassword from "../pages/user/ChangePassword";
import Profile from "../pages/user/Profile"
import BookDetail from "../pages/user/BookDetail";
import ScrollToTop from "../components/user/ScrollToTop";
import PopularBooks from "../pages/user/PopularBooks";
import Location from "../pages/user/Location";
import Information from "../pages/user/Information";
import SearchResults from '../pages/user/SearchResults';
import Cart from "../pages/user/Cart";
import PrivacyPolicy from "../pages/user/PrivacyPolicy";
import TermsOfService from "../pages/user/TermsOfService";

export default function UserRouter() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/resetPassword" element={<ResetPassword />} />
                    <Route path="/changePassword" element={<ChangePassword />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/bookDetail/:id" element={<BookDetail />} />
                    <Route path="/popularBook" element={<PopularBooks />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                </Route>

            </Routes>
        </>
    )
}