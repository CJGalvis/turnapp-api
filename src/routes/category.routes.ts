import { Router } from "express";
import {
  createCategory,
  getCategories
} from "../controllers/category.controller";

const router: Router = Router();

router.post('/categories/new', createCategory);
router.get('/categories/get', getCategories);

export default router;