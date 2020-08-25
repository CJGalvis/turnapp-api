"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = require("../controllers/test.controller");
const router = express_1.Router();
router.post('/test/post', test_controller_1.testPost);
router.get('/test/get', test_controller_1.testGet);
exports.default = router;
//# sourceMappingURL=test.route.js.map