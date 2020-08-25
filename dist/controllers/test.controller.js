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
exports.testGet = exports.testPost = void 0;
const test_model_1 = __importDefault(require("../models/test.model"));
exports.testPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const newModel = new test_model_1.default({
            name: body.name,
            age: body.age
        });
        yield newModel.save();
        res.status(200).send({
            message: 'OK',
            data: newModel
        });
    }
    catch (error) {
        res.status(500).send({
            message: 'Server internal error',
            error
        });
    }
});
exports.testGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield test_model_1.default.find();
        res.status(200).send({
            message: 'Hello world',
            data
        });
    }
    catch (error) {
        res.status(200).send({
            message: 'Server internal error',
            error
        });
    }
});
//# sourceMappingURL=test.controller.js.map