import { Router } from "express";
import {
  createShedule,
  getShedules
} from "../controllers/shedule.controller";

const router: Router = Router();

router.post('/shedules/new', createShedule);
router.get('/shedules/get', getShedules);

export default router;