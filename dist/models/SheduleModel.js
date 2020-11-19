"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SheduleSchema = new mongoose_1.Schema({
    employeeCode: {
        type: String,
        required: [true, 'La código del empleado del turno es requerido'],
    },
    dateStart: {
        type: Date,
        required: [true, 'La fecha inicial del turno es requerida'],
    },
    dateEnd: {
        type: Date,
        required: [true, 'La fecha final del turno es requerida'],
    },
    type: {
        type: String,
        required: [true, 'El tipo de turno es requerido'],
    },
    hours: {
        type: String,
        required: [true, 'Las horas del turno son requeridas'],
    },
    tenant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tenants',
        required: [true, 'El tenant es requerido']
    }
}, { versionKey: false });
exports.default = mongoose_1.model("shedules", SheduleSchema);
//# sourceMappingURL=SheduleModel.js.map