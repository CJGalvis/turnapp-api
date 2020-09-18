"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.Router();
router.post('/products/new', product_controller_1.createProduct);
router.post('/products/get', product_controller_1.getProducts);
router.get('/products/get/:code', product_controller_1.getOneProduct);
exports.default = router;
//# sourceMappingURL=products.routes.js.map