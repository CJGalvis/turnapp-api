"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SheduleSchema = new mongoose_1.Schema({
    timeStart: {
        type: Date,
        required: [true, 'La hora inicial del turno es requerida'],
    },
    timeEnd: {
        type: Date,
        required: [true, 'La hora final del turno es requerida'],
    },
    employee: {
        type: String,
        default: null
    },
    assigned: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
exports.default = mongoose_1.model("shedules", SheduleSchema);
//# sourceMappingURL=SheduleModel.js.map