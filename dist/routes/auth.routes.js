"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const auth_1 = require("../middlewares/auth");
const router = express_1.Router();
router.post('/auth/tenant/login', auth_controllers_1.signIn);
router.post('/auth/tenant/new', auth_controllers_1.signUp);
router.get('/auth/tenant/current', [auth_1.verifyToken], auth_controllers_1.currentUser);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map