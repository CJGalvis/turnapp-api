import { Request, Response } from 'express';
import TestModel, { ITest } from '../models/test.model';

export const testPost = async (req: Request, res: Response) => {
    try {
        const body = req.body as ITest;
        const newModel: ITest = new TestModel({
            name: body.name,
            age: body.age
        });
        await newModel.save();
        res.status(200).send({
            message: 'OK',
            data: newModel
        });
    } catch (error) {
        res.status(500).send({
            message: 'Server internal error',
            error
        });
    }
}

export const testGet = async (req: Request, res: Response) => {
    try {
        const data = await TestModel.find();
        res.status(200).send({
            message: 'Hello world',
            data
        });
    } catch (error) {
        res.status(200).send({
            message: 'Server internal error',
            error
        });
    }
}