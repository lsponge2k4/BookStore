import express from 'express';
import helloRoute from './router.hello';
import homeRoute from './routers.home';

const router = express.Router();

router.use("/api", helloRoute);
router.use("/api", homeRoute);

export default router;
