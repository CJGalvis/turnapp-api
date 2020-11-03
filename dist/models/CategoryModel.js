"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoría es requerido'],
    },
    value: {
        type: String,
        required: [true, 'El valor de la categoría es requerido'],
    }
}, { versionKey: false });
exports.default = mongoose_1.model("categories", CategorySchema);
//# sourceMappingURL=CategoryModel.js.map