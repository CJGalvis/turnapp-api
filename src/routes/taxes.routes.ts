import { Router } from "express";
import {
  createTax,
  getTax
} from "../controllers/taxes.controller";

const router: Router = Router();

router.post('/taxes/new', createTax);
router.get('/taxes/get', getTax);

export default router;