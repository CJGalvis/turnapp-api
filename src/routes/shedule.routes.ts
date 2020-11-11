import { Router } from "express";
import {
  createShedule,
  getShedules
} from "../controllers/shedule.controller";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/shedules/new', [verifyToken], createShedule);
router.get('/shedules/get', [verifyToken], getShedules);

export default router;