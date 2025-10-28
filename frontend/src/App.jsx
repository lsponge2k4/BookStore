import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.json())
      .then((result) => setData(result.message))
      .catch((err) => console.error("Lỗi kết nối API:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React + Express Demo 🚀</h1>
      <p>{data ? data : "Đang tải dữ liệu từ backend..."}</p>
    </div>
  );
}

export default App;
