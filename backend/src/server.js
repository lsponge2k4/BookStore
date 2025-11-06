import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/db.js";
import configViewEngine from "./config/viewEngine.js";
import apiRoutes from "./routes/api.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
// app.use('/image', express.static('public/image'));

// Middlewares

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser()); // read and use cookie
// Config View
configViewEngine(app);

// Routes
app.use("/", apiRoutes);

// Connect DB
connect();

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`)
);
