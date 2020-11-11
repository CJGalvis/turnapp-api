import { Router } from "express";
import {
  createTurn,
  getTurns,
  updateTurn,
  deleteTurns
} from "../controllers/turns.controller";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/turns/new', [verifyToken], createTurn);
router.get('/turns/get', [verifyToken], getTurns);
router.put('/turns/put/:_id', [verifyToken], updateTurn);
router.delete('/turns/delete/:_id', [verifyToken], deleteTurns);

export default router;