"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaxSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: [true, 'El valor del impuesto es requerido'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'La descripción del impuesto es requerido'],
    }
}, { versionKey: false });
TaxSchema.methods.toJSON = function () {
    let tax = this;
    let taxObject = tax.toObject();
    delete taxObject._id;
    return taxObject;
};
exports.default = mongoose_1.model("taxes", TaxSchema);
//# sourceMappingURL=TaxModel.js.map