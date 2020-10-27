"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const router = express_1.Router();
router.post('/employees/new', employee_controller_1.createEmployee);
router.get('/employees/get', employee_controller_1.getEmployees);
router.get('/employees/get/:code', employee_controller_1.getOneEmployee);
router.delete('/employees/delete/:code', employee_controller_1.deleteEmployee);
router.put('/employees/put/:code', employee_controller_1.updateEmployee);
exports.default = router;
//# sourceMappingURL=employees.routes.js.map