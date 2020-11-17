import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PayloadModel } from '../models/PayloadModel';
const TOKEN_ALT: string = 'Abc123$*';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).send({
            message: 'Authorization invalid'
        });
        const payload = jwt.verify(token, process.env.JWT_SECRET || TOKEN_ALT) as PayloadModel
        req.tenant = payload.id;
        next();
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}