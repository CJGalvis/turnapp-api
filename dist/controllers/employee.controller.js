"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesFilters = exports.updateEmployee = exports.deleteEmployee = exports.getOneEmployee = exports.getEmployees = exports.createEmployee = void 0;
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
exports.createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newEmployee = new EmployeeModel_1.default({
            identificationNumber: body.identificationNumber,
            identificationType: body.identificationType,
            firstName: body.firstName,
            seconName: body.seconName,
            firstLastname: body.firstLastname,
            seconLastname: body.seconLastname,
            created: new Date(),
            email: body.email,
            category: body.category,
        });
        newEmployee.code = newEmployee.firstName.substring(0, 1).toUpperCase() + newEmployee.identificationNumber + newEmployee.firstLastname.substring(0, 1).toUpperCase();
        newEmployee.created = new Date();
        yield newEmployee.save();
        res.status(200).send({
            message: 'Empleado guardado exitosamente',
            newEmployee
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let skip = Number(req.query.skip);
        let limit = Number(req.query.limit);
        const items = yield EmployeeModel_1.default.find().skip(skip).limit(limit);
        const totalItems = yield EmployeeModel_1.default.countDocuments();
        res.status(200).send({
            message: 'ok',
            items,
            totalItems
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getOneEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const data = yield EmployeeModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Empleado no encontrado'
            });
        res.status(200).send({
            message: 'OK',
            data
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const data = yield EmployeeModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Empleado no encontrado'
            });
        yield EmployeeModel_1.default.findOneAndDelete({ code });
        res.status(200).send({
            message: 'Empleado eliminado correctamente',
            data
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const { body } = req;
        const data = yield EmployeeModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Empleado no encontrado'
            });
        const newData = yield EmployeeModel_1.default.findOneAndUpdate({ code }, body, { new: true });
        res.status(200).send({
            message: 'Empleado actualizado correctamente',
            data: newData
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getEmployeesFilters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let skip = Number(req.body.skip);
        let limit = Number(req.body.limit);
        let body = {};
        if (req.body.firstName) {
            body = Object.assign({
                $or: [
                    { firstName: new RegExp(`${req.body.firstName}.*`, 'i') }
                ]
            }, body);
        }
        if (req.body.firstLastname) {
            body = Object.assign({
                $or: [
                    { firstLastname: new RegExp(`${req.body.firstLastname}.*`, 'i') }
                ]
            }, body);
        }
        if (req.body.category) {
            body = Object.assign({
                $or: [
                    { category: req.body.category }
                ]
            }, body);
        }
        if (req.body.code) {
            body = {
                code: req.body.code
            };
        }
        const items = yield EmployeeModel_1.default.find(Object.assign({}, body)).skip(skip).limit(limit);
        const totalItems = yield EmployeeModel_1.default.countDocuments();
        res.status(200).send({
            message: 'ok',
            items,
            totalItems
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
//# sourceMappingURL=employee.controller.js.map