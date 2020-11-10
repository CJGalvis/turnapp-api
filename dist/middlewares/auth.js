"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TOKEN_ALT = 'Abc123$*';
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).send({
                message: 'Authorization invalid'
            });
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || TOKEN_ALT);
        req.tennant = payload.id;
        next();
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
};
//# sourceMappingURL=auth.js.map