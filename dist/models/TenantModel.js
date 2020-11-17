"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TennantSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre para el contrato es requerido']
    },
    created: {
        type: Date,
        default: new Date()
    },
    license: {
        type: String,
        required: [true, 'La licencia del contrato es requerida']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    phone: {
        type: String,
        required: [true, 'El teléfono es requerido']
    },
    identification: {
        type: String,
        required: [true, 'La identificación es requerida'],
        unique: true
    },
    lastSign: {
        type: Date,
        default: null
    }
}, { versionKey: false });
exports.default = mongoose_1.model("tenants", TennantSchema);
//# sourceMappingURL=TenantModel.js.map