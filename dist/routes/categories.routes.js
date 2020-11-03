"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.Router();
router.post('/categories/new', category_controller_1.createCategory);
router.get('/categories/get', category_controller_1.getCategories);
router.put('/categories/put/:_id', category_controller_1.updateCategory);
router.get('/categories/delete/:_id', category_controller_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=categories.routes.js.map