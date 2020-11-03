import { Router } from "express";
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} from "../controllers/category.controller";

const router: Router = Router();

router.post('/categories/new', createCategory);
router.get('/categories/get', getCategories);
router.put('/categories/put/:_id', updateCategory);
router.get('/categories/delete/:_id', deleteCategory);

export default router;