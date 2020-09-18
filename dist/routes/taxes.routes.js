"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxes_controller_1 = require("../controllers/taxes.controller");
const router = express_1.Router();
router.post('/taxes/new', taxes_controller_1.createTax);
router.get('/taxes/get', taxes_controller_1.getTax);
exports.default = router;
//# sourceMappingURL=taxes.routes.js.map