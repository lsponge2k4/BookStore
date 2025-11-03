import express from 'express'
import * as UserMiddlewares from '../middlewares/middlewares.user'
import * as UserControllers from '../controllers/controllers.user'

const router = express.Router();

router.get("/user", UserMiddlewares.middd, UserControllers.xxx);

export default router;

