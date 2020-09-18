"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_routes_1 = __importDefault(require("./products.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const taxes_routes_1 = __importDefault(require("./taxes.routes"));
const router = express_1.Router();
router.use('/api', [
    products_routes_1.default,
    category_routes_1.default,
    taxes_routes_1.default
]);
exports.default = router;
//# sourceMappingURL=index.routes.js.map