import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/db.js";
import configViewEngine from "./config/viewEngine.js";
import apiRoutes from "./routes/api.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import logger from "../src/config/logger.js";

dotenv.config();
const app = express();

// Middlewares

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser()); // read and use cookie
// Config View
configViewEngine(app);

// Morgan
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.http(message.trim())
    }
  })
);

// Routes
app.use("/", apiRoutes);

// Connect DB
connect();

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server đang chạy tại:${PORT}`)
);
