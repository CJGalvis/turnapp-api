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
exports.updateCategory = exports.deleteCategory = exports.getCategories = exports.createCategory = void 0;
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
exports.createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newCategory = new CategoryModel_1.default({
            name: body.name,
            description: body.description,
            tenant: req.tenant
        });
        yield newCategory.save();
        res.status(200).send({
            message: 'Categoría guardada exitósamente',
            data: newCategory
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let skip = Number(req.query.skip);
        let limit = Number(req.query.limit);
        const items = yield CategoryModel_1.default.find({ tenant: req.tenant })
            .skip(skip)
            .limit(limit)
            .exec();
        const totalItems = yield CategoryModel_1.default.countDocuments({ tenant: req.tenant });
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
exports.deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const data = yield CategoryModel_1.default.findById(_id);
        if (!data)
            return res.status(404).send({
                message: 'Categoría no encontrada'
            });
        const employees = yield EmployeeModel_1.default.find({ category: _id, tenant: req.tenant });
        if (employees && employees.length > 0)
            return res.status(400).send({
                message: 'La categoría está en uso y no puede ser eliminada'
            });
        yield CategoryModel_1.default.findByIdAndDelete(_id);
        res.status(200).send({
            message: 'Categoría eliminada correctamente',
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
exports.updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { body } = req;
        const data = yield CategoryModel_1.default.findById(_id);
        if (!data)
            return res.status(404).send({
                message: 'Categoría no encontrada'
            });
        const newData = yield CategoryModel_1.default.findByIdAndUpdate(_id, body, { new: true });
        res.status(200).send({
            message: 'Categoría actualizada correctamente',
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
//# sourceMappingURL=category.controller.js.map