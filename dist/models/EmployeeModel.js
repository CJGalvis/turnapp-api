"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EmployeeSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, 'El código del empleado es requerido'],
        unique: true
    },
    identificationNumber: {
        type: String,
        required: [true, 'El número de identificación del empleado es requerido']
    },
    identificationType: {
        type: String,
        required: [true, 'Eltipo de identificación del empleado es requerido']
    },
    firstName: {
        type: String,
        required: [true, 'El primer nombre del empleado es requerido']
    },
    seconName: {
        type: String,
        default: ''
    },
    firstLastname: {
        type: String,
        required: [true, 'El primer apellido del empleado es requerido']
    },
    seconLastname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: [true, 'El email del empleado es requerido'],
        unique: true
    },
    created: {
        type: Date,
    },
    category: {
        type: String,
        required: [true, 'La categoría del empleado es requerida']
    }
}, { versionKey: false });
EmployeeSchema.methods.toJSON = function () {
    let employee = this;
    let employeeObject = employee.toObject();
    delete employeeObject._id;
    return employeeObject;
};
exports.default = mongoose_1.model("employees", EmployeeSchema);
//# sourceMappingURL=EmployeeModel.js.map