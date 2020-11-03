import { Request, Response } from 'express';
import CategoryModel, { ICategory } from '../models/CategoryModel';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const newCategory: ICategory = new CategoryModel({
            name: body.name,
            value: body.value
        });
        await newCategory.save();
        res.status(200).send({
            message: 'OK',
            data: newCategory
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const getCategories = async (req: Request, res: Response) => {
    try {
        const items = await CategoryModel.find();
        res.status(200).send({
            message: 'OK',
            items
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const data = await CategoryModel.findById(_id);
        if (!data) return res.status(404).send({
            message: 'Categoría no encontrada'
        })

        await CategoryModel.findByIdAndDelete(_id);

        res.status(200).send({
            message: 'Categoría eliminada correctamente',
            data
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { _id } = req.params;
        const { body } = req;
        const data = await CategoryModel.findById(_id);
        if (!data) return res.status(404).send({
            message: 'Categoría no encontrada'
        })

        const newData = await CategoryModel.findByIdAndUpdate(_id, body, { new: true });

        res.status(200).send({
            message: 'Categoría actualizada correctamente',
            data: newData
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            error
        })
    }
}