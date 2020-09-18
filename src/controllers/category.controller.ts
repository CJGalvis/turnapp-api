import { Request, Response } from 'express';
import CategoryModel, { ICategory } from '../models/CategoryModel';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newCategory: ICategory = new CategoryModel({
      value: body.value,
      description: body.description
    })
    await newCategory.save();
    res.status(200).send({
      message: 'OK',
      data: newCategory
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const getCategories = async (req: Request, res: Response) => {
  try {
    const items = await CategoryModel.find();
    res.status(200).send({
      message: 'OK',
      items
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}