import { Request, Response } from 'express';
import IdentificationModel, { IIdentification } from '../models/IdentificationType';
import EmployeeModel from '../models/EmployeeModel';

export const createIdentification = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const newIdentification: IIdentification = new IdentificationModel({
            value: body.value,
            description: body.description,
            tenant: req.tenant
        });
        await newIdentification.save();
        res.status(200).send({
            message: 'Identificación guardada exitósamente',
            data: newIdentification
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const getIdentification = async (req: Request, res: Response) => {
    try {
        let skip = Number(req.query.skip);
        let limit = Number(req.query.limit);
        const items = await IdentificationModel.find({ tenant: req.tenant })
            .skip(skip)
            .limit(limit)
            .exec();
        const totalItems: number = await IdentificationModel.countDocuments({ tenant: req.tenant });

        res.status(200).send({
            message: 'OK',
            items,
            totalItems
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const deleteIdentification = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const data = await IdentificationModel.findById(_id);
        if (!data) return res.status(404).send({
            message: 'Identificaión no encontrada'
        });

        const employees = await EmployeeModel.find({ category: _id, tenant: req.tenant });
        if (employees && employees.length > 0) return res.status(400).send({
            message: 'El tipo de identificación está en uso y no puede ser eliminado'
        });

        await IdentificationModel.findByIdAndDelete(_id);

        res.status(200).send({
            message: 'Identificación eliminada correctamente',
            data
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const updateIdentification = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const { body } = req;
        const data = await IdentificationModel.findById(_id);
        if (!data) return res.status(404).send({
            message: 'Identificación no encontrada'
        })

        const newData = await IdentificationModel.findByIdAndUpdate(_id, body, { new: true });

        res.status(200).send({
            message: 'Identificación actualizada correctamente',
            data: newData
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        })
    }
}