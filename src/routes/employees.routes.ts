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
router.post('/employees/get', getEmployeesFilters);
router.get('/employees/get/:code', getOneEmployee);
router.delete('/employees/delete/:code', deleteEmployee);
router.put('/employees/put/:code', updateEmployee);

export default router;