import { Router } from "express";
import {
  createEmployee,
  getOneEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeesFilters
} from "../controllers/employee.controller";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/employees/new', [verifyToken], createEmployee);
router.get('/employees/get', [verifyToken], getEmployees);
router.post('/employees/get', [verifyToken], getEmployeesFilters);
router.get('/employees/get/:code', [verifyToken], getOneEmployee);
router.delete('/employees/delete/:code', [verifyToken], deleteEmployee);
router.put('/employees/put/:code', [verifyToken], updateEmployee);

export default router;