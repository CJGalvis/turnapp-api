import { Router } from "express";
import {
  createTurn,
  getTurns,
  updateTurn,
  deleteTurns
} from "../controllers/turns.controller";

const router: Router = Router();

router.post('/turns/new', createTurn);
router.get('/turns/get', getTurns);
router.put('/turns/update/:_id', updateTurn);
router.delete('/turns/delete/:_id', deleteTurns);

export default router;