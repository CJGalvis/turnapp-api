"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TurnSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del turno es requerido'],
    },
    timeStart: {
        type: String,
        required: [true, 'La hora inicial del turno es requerida'],
    },
    timeEnd: {
        type: String,
        required: [true, 'La hora final del turno es requerida'],
    },
    tennant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tennants',
        required: [true, 'El tennant es requerido']
    }
}, { versionKey: false });
exports.default = mongoose_1.model("turns", TurnSchema);
//# sourceMappingURL=TurnModel.js.map