import { Router } from 'express';
import productsRoutes from './products.routes';
import categoryRoutes from './category.routes';
import taxesRoutes from './taxes.routes';

const router: Router = Router();

router.use('/api', [
  productsRoutes,
  categoryRoutes,
  taxesRoutes
])

export default router;
