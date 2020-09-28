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
exports.updateProduct = exports.deleteProduct = exports.getOneProduct = exports.getProducts = exports.createProduct = void 0;
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
exports.createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newProduct = new ProductModel_1.default({
            code: body.code,
            name: body.name,
            price: body.price,
            created: new Date(),
            category: body.category,
            tax: body.tax,
            description: body.description,
            priceCost: body.priceCost,
            enable: body.enable,
            stock: body.stock,
        });
        yield newProduct.save();
        res.status(200).send({
            message: 'Producto guardado exitosamente',
            newProduct
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
});
exports.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let skip = Number(req.query.skip);
        let limit = Number(req.query.limit);
        const items = yield ProductModel_1.default.find().skip(skip).limit(limit);
        const totalItems = yield ProductModel_1.default.countDocuments();
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
exports.getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const data = yield ProductModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Producto no encontrado'
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
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const data = yield ProductModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Producto no encontrado'
            });
        yield ProductModel_1.default.findOneAndDelete({ code });
        res.status(200).send({
            message: 'Producto eliminado correctamente',
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
exports.updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const { body } = req;
        const data = yield ProductModel_1.default.find({ code });
        if (!data)
            return res.status(404).send({
                message: 'Producto no encontrado'
            });
        const newData = yield ProductModel_1.default.findOneAndUpdate({ code }, body, { new: true });
        res.status(200).send({
            message: 'Producto actualizado correctamente',
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
//# sourceMappingURL=product.controller.js.map