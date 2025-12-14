import express from 'express';
import helloRoute from './router.hello.js';
import homeRoute from './routers.home.js';
import userRoute from './routers.user.js';
import popularRoute from './routers.popular.js';
import userCartRoute from './routers.user.cart.js';
import adminRoute from './routers.admin.js';

const router = express.Router();

router.use("/api", helloRoute);
router.use("/api", homeRoute);
router.use("/api", userRoute);
router.use("/api", popularRoute);
router.use("/api", userCartRoute);
router.use("/api", adminRoute);

export default router;
