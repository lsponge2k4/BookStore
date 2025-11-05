import express from 'express';
import helloRoute from './router.hello';
import homeRoute from './routers.home';
import userRoute from './routers.user';

const router = express.Router();

router.use("/api", helloRoute);
router.use("/api", homeRoute);
router.use("/api", userRoute);

export default router;
