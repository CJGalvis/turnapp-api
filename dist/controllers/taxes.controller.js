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
exports.getTax = exports.createTax = void 0;
const TaxModel_1 = __importDefault(require("../models/TaxModel"));
exports.createTax = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newTax = new TaxModel_1.default({
            value: body.value,
            description: body.description
        });
        yield newTax.save();
        res.status(200).send({
            message: 'OK',
            data: newTax
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getTax = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield TaxModel_1.default.find();
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
//# sourceMappingURL=taxes.controller.js.map