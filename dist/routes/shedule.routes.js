"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shedule_controller_1 = require("../controllers/shedule.controller");
const auth_1 = require("../middlewares/auth");
const router = express_1.Router();
router.post('/shedules/new', [auth_1.verifyToken], shedule_controller_1.createShedule);
router.get('/shedules/get', [auth_1.verifyToken], shedule_controller_1.getShedules);
router.put('/shedules/put/:_id', [auth_1.verifyToken], shedule_controller_1.updateShedule);
router.get('/shedules/delete/:_id', [auth_1.verifyToken], shedule_controller_1.deleteShedule);
exports.default = router;
//# sourceMappingURL=shedule.routes.js.map