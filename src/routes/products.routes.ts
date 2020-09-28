import { Router } from "express";
import {
  createProduct,
  getOneProduct,
  getProducts,
  deleteProduct,
  updateProduct
} from "../controllers/product.controller";

const router: Router = Router();

router.post('/products/new', createProduct);
router.get('/products/get', getProducts);
router.get('/products/get/:code', getOneProduct);
router.delete('/products/delete/:code', deleteProduct);
router.put('/products/put/:code', updateProduct);

export default router;