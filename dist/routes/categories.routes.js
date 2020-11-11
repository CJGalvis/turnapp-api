"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const auth_1 = require("../middlewares/auth");
const router = express_1.Router();
router.post('/categories/new', [auth_1.verifyToken], category_controller_1.createCategory);
router.get('/categories/get', [auth_1.verifyToken], category_controller_1.getCategories);
router.put('/categories/put/:_id', [auth_1.verifyToken], category_controller_1.updateCategory);
router.get('/categories/delete/:_id', [auth_1.verifyToken], category_controller_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=categories.routes.js.map