import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const checkConnection = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let connections = mongoose.connections;
        console.log(connections);
        next();
    } catch (error) {

    }
}
