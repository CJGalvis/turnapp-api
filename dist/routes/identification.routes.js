"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const identifications_controllers_1 = require("../controllers/identifications.controllers");
const auth_1 = require("../middlewares/auth");
const router = express_1.Router();
router.post('/identification-types/new', [auth_1.verifyToken], identifications_controllers_1.createIdentification);
router.get('/identification-types/get', [auth_1.verifyToken], identifications_controllers_1.getIdentification);
router.put('/identification-types/put/:_id', [auth_1.verifyToken], identifications_controllers_1.updateIdentification);
router.get('/identification-types/delete/:_id', [auth_1.verifyToken], identifications_controllers_1.deleteIdentification);
exports.default = router;
//# sourceMappingURL=identification.routes.js.map