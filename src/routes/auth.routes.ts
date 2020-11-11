import { Router } from "express";
import {
    signIn,
    signUp,
    currentUser
} from "../controllers/auth.controllers";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/auth/tennant/login', signIn);
router.post('/auth/tennant/new', signUp);
router.get('/auth/tennant/current', [verifyToken], currentUser);

export default router;