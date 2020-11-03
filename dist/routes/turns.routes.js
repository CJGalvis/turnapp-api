"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turns_controller_1 = require("../controllers/turns.controller");
const router = express_1.Router();
router.post('/turns/new', turns_controller_1.createTurn);
router.get('/turns/get', turns_controller_1.getTurns);
router.put('/turns/update/:_id', turns_controller_1.updateTurn);
router.delete('/turns/delete/:_id', turns_controller_1.deleteTurns);
exports.default = router;
//# sourceMappingURL=turns.routes.js.map