import { Router } from "express";
import { testPost, testGet } from "../controllers/test.controller";

const router: Router = Router();

router.post('/test/post', testPost);
router.get('/test/get', testGet);

export default router;