import { Router } from "express";
import {
  createShedule,
  getShedules,
  updateShedule,
  deleteShedule
} from "../controllers/shedule.controller";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/shedules/new', [verifyToken], createShedule);
router.get('/shedules/get', [verifyToken], getShedules);
router.put('/shedules/put/:_id', [verifyToken], updateShedule);
router.get('/shedules/delete/:_id', [verifyToken], deleteShedule);

export default router;