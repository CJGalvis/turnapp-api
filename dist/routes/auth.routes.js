"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = express_1.Router();
router.post('/auth/tennant/login', auth_controllers_1.signIn);
router.post('/auth/tennant/new', auth_controllers_1.signUp);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map