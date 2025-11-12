import { useEffect } from "react";
import axios from "./util/axios.customize";
import { HeaderBar } from "./components/commons/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/commons/footer";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      try {
        const res = await axios.get(`/api/hello`);
        console.log("Check res!!", res.data);
      } catch (error) {
        console.error("Error fetching hello world:", error);
      }
    };

    fetchHelloWorld();
  }, []);

  return (
    <>
      <HeaderBar />
      <main className="min-h-screen bg-gray-50">
        <Outlet /> {/* nơi hiển thị nội dung từng page */}
      </main>
      <Footer />
    </>
  );
}

export default App;
