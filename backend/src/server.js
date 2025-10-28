import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Cho phép FE gọi đến BE
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ backend 👋" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server chạy ở http://localhost:${PORT}`));
