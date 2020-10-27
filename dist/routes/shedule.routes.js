"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shedule_controller_1 = require("../controllers/shedule.controller");
const router = express_1.Router();
router.post('/shedules/new', shedule_controller_1.createShedule);
router.get('/shedules/get', shedule_controller_1.getShedules);
exports.default = router;
//# sourceMappingURL=shedule.routes.js.map