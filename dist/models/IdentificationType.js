"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const IdentificationTypeSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: [true, 'El valor es requerido'],
    },
    description: {
        type: String,
        required: [true, 'La descripción es requerido'],
    },
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tennants',
        required: [true, 'El tenant es requerido']
    }
}, { versionKey: false });
exports.default = mongoose_1.model("identificationTypes", IdentificationTypeSchema);
//# sourceMappingURL=IdentificationType.js.map