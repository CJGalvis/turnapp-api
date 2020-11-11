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
exports.currentUser = exports.signUp = exports.signIn = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TennantModel_1 = __importDefault(require("../models/TennantModel"));
exports.signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const data = yield TennantModel_1.default.findOne({ email });
        if (!data)
            return res.status(404).send({
                message: 'El usuario no existe o la información no es correcta'
            });
        if (!bcrypt_1.default.compareSync(password, data.password))
            return res.status(400).send({
                message: 'Usuario o contraseña incorrectos'
            });
        yield TennantModel_1.default.findOneAndUpdate({ email }, { $set: { lastSign: new Date() } });
        const payload = JSON.parse(JSON.stringify({ name: data.name, id: data._id }));
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || '', { expiresIn: process.env.EXPIRES_TOKEN });
        res.status(200).send({
            message: 'OK',
            token
        });
    }
    catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
});
exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        let data = yield TennantModel_1.default.findOne({ email: body.email });
        if (data)
            return res.status(400).send({
                message: 'El email ya está en uso'
            });
        data = yield TennantModel_1.default.findOne({ identification: body.identification });
        if (data)
            return res.status(400).send({
                message: 'La identificación ya está en uso'
            });
        const payloadLicense = JSON.parse(JSON.stringify({ name: body.name, email: body.email }));
        const tokenLicense = jsonwebtoken_1.default.sign(payloadLicense, process.env.JWT_SECRET_LICENSE || '', { expiresIn: process.env.EXPIRES_TOKEN_LICENSE });
        const newTennant = new TennantModel_1.default({
            name: body.name,
            created: new Date(),
            license: tokenLicense,
            email: body.email,
            password: bcrypt_1.default.hashSync(body.password, 10),
            phone: body.phone,
            identification: body.identification
        });
        yield newTennant.save();
        res.status(200).send({
            message: 'Contrato creado correctamente',
            data: newTennant
        });
    }
    catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
});
exports.currentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TennantModel_1.default.find({ identification: req.tennant });
        res.status(200).send({
            message: 'OK',
            data
        });
    }
    catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
});
//# sourceMappingURL=auth.controllers.js.map