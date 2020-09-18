import { Request, Response } from 'express';
import TaxModel, { ITax } from '../models/TaxModel';

export const createTax = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newTax: ITax = new TaxModel({
      value: body.value,
      description: body.description
    })
    await newTax.save();
    res.status(200).send({
      message: 'OK',
      data: newTax
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    });
  }
}

export const getTax = async (req: Request, res: Response) => {
  try {
    const items = await TaxModel.find();
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