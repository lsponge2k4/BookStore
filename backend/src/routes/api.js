import express from 'express';
import helloRoute from './router.hello';
import homeRoute from './routers.home';
import userRoute from './routers.user';
import popularRoute from './routers.popular';
import userCartRoute from './routers.user.cart';
import adminRoute from './routers.admin';

const router = express.Router();

router.use("/api", helloRoute);
router.use("/api", homeRoute);
router.use("/api", userRoute);
router.use("/api", popularRoute);
router.use("/api", userCartRoute);
router.use("/api", adminRoute);

export default router;
