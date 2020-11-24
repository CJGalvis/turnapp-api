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
exports.updateShedule = exports.deleteShedule = exports.getShedules = exports.createShedule = void 0;
const SheduleModel_1 = __importDefault(require("../models/SheduleModel"));
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
exports.createShedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const employee = yield EmployeeModel_1.default.find({ code: body.employeeCode, tenant: req.tenant });
        if (!employee)
            return res.status(400).send({
                message: 'El empleado no existe o el código es incorrecto'
            });
        const shedulesEmployee = yield SheduleModel_1.default.find({ employeeCode: body.employeeCode, tenant: req.tenant });
        console.log(shedulesEmployee);
        if (shedulesEmployee && shedulesEmployee.length > 0) {
            shedulesEmployee.forEach((item) => {
                if (body.dateStart >= item.dateStart && body.dateEnd <= item.dateEnd) {
                    return res.status(400).send({
                        message: 'Existen solapes en los turnos del empleado seleccionado'
                    });
                }
            });
        }
        const newShedule = new SheduleModel_1.default({
            employeeCode: body.employeeCode,
            dateStart: body.dateStart,
            dateEnd: body.dateEnd,
            type: body.type,
            hours: body.hours,
            tenant: req.tenant
        });
        yield newShedule.save();
        res.status(200).send({
            message: 'Horario guardado exitósamente',
            data: newShedule
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getShedules = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let skip = Number(req.query.skip);
        let limit = Number(req.query.limit);
        const items = yield SheduleModel_1.default.find({ tenant: req.tenant })
            .skip(skip)
            .limit(limit)
            .populate('type name')
            .exec();
        const totalItems = yield SheduleModel_1.default.countDocuments({ tenant: req.tenant });
        res.status(200).send({
            message: 'OK',
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
exports.deleteShedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const data = yield SheduleModel_1.default.findById(_id);
        if (!data)
            return res.status(404).send({
                message: 'Horario no encontrado'
            });
        const employees = yield EmployeeModel_1.default.find({ category: _id, tenant: req.tenant });
        if (employees && employees.length > 0)
            return res.status(400).send({
                message: 'El horario está en uso y no puede ser eliminado'
            });
        yield SheduleModel_1.default.findByIdAndDelete(_id);
        res.status(200).send({
            message: 'horario eliminado correctamente',
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
exports.updateShedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { body } = req;
        const data = yield SheduleModel_1.default.findById(_id);
        if (!data)
            return res.status(404).send({
                message: 'horario no encontrada'
            });
        const newData = yield SheduleModel_1.default.findByIdAndUpdate(_id, body, { new: true });
        res.status(200).send({
            message: 'horario actualizado correctamente',
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
//# sourceMappingURL=shedule.controller.js.map