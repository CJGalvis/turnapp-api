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
exports.getCategories = exports.createCategory = void 0;
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
exports.createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newCategory = new CategoryModel_1.default({
            value: body.value,
            description: body.description
        });
        yield newCategory.save();
        res.status(200).send({
            message: 'OK',
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
        const items = yield CategoryModel_1.default.find();
        res.status(200).send({
            message: 'OK',
            items
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