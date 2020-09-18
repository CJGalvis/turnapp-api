"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: [true, 'El valor de la categoría es requerido'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'La descripción de la categoría es requerido']
    }
}, { versionKey: false });
CategorySchema.methods.toJSON = function () {
    let category = this;
    let categoryObject = category.toObject();
    delete categoryObject._id;
    return categoryObject;
};
exports.default = mongoose_1.model("categories", CategorySchema);
//# sourceMappingURL=CategoryModel.js.map