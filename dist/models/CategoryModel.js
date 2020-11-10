"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoría es requerido'],
    },
    description: {
        type: String,
        required: [true, 'El valor de la categoría es requerido'],
    },
    tennat: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tennants'
    }
}, { versionKey: false });
exports.default = mongoose_1.model("categories", CategorySchema);
//# sourceMappingURL=CategoryModel.js.map