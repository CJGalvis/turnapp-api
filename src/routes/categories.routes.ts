import { Router } from "express";
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} from "../controllers/category.controller";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/categories/new', [verifyToken], createCategory);
router.get('/categories/get', [verifyToken], getCategories);
router.put('/categories/put/:_id', [verifyToken], updateCategory);
router.get('/categories/delete/:_id', [verifyToken], deleteCategory);

export default router;