import Header from "../components/user/Header";
import Footer from "../components/user/Footer";

export default function UserLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}