import { Router } from "express";
import {
    signIn,
    signUp
} from "../controllers/auth.controllers";

const router: Router = Router();

router.post('/auth/tennant/login', signIn);
router.post('/auth/tennant/new', signUp);

export default router;