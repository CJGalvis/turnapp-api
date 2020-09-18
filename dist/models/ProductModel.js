"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, 'El código del producto es requerido'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    price: {
        type: Number,
        required: [true, 'El precio del producto es requerido']
    },
    created: {
        type: Date,
    },
    category: {
        type: String,
        required: [true, 'La categpría del producto es requerida']
    },
    tax: {
        type: String,
        required: [true, 'El impuesto del producto es requerido']
    },
    description: {
        type: String,
    },
    priceCost: {
        type: Number,
        required: [true, 'El precio de costo del producto es requerido']
    },
    enable: {
        type: Boolean,
        default: false
    },
    stock: {
        type: Number,
        default: 0
    },
}, { versionKey: false });
exports.default = mongoose_1.model("products", ProductSchema);
//# sourceMappingURL=ProductModel.js.map