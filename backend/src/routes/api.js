import express from "express";
import helloRoute from "./router.hello.js";
import userRoute from './routers.user.js'

const router = express.Router();

router.use("/api", helloRoute);
router.use("/api", userRoute);

export default router;
