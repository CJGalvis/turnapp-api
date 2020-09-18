"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.Router();
router.post('/categories/new', category_controller_1.createCategory);
router.get('/categories/get', category_controller_1.getCategories);
exports.default = router;
//# sourceMappingURL=category.routes.js.map