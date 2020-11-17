import { Router } from "express";
import {
    signIn,
    signUp,
    currentUser
} from "../controllers/auth.controllers";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/auth/tenant/login', signIn);
router.post('/auth/tenant/new', signUp);
router.get('/auth/tenant/current', [verifyToken], currentUser);

export default router;