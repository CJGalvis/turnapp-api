import { Router } from "express";
import {
  createEmployee,
  getOneEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee
} from "../controllers/employee.controller";

const router: Router = Router();

router.post('/employees/new', createEmployee);
router.get('/employees/get', getEmployees);
router.get('/employees/get/:code', getOneEmployee);
router.delete('/employees/delete/:code', deleteEmployee);
router.put('/employees/put/:code', updateEmployee);

export default router;