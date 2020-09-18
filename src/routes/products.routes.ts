import { Router } from "express";
import {
  createProduct,
  getOneProduct,
  getProducts
} from "../controllers/product.controller";

const router: Router = Router();

router.post('/products/new', createProduct);
router.post('/products/get', getProducts);
router.get('/products/get/:code', getOneProduct);

export default router;