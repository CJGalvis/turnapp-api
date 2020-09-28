import { Request, Response } from 'express';
import ProductModel, { IProduct } from '../models/ProductModel';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newProduct: IProduct = new ProductModel({
      code: body.code,
      name: body.name,
      price: body.price,
      created: new Date(),
      category: body.category,
      tax: body.tax,
      description: body.description,
      priceCost: body.priceCost,
      enable: body.enable,
      stock: body.stock,
    });

    await newProduct.save();

    res.status(200).send({
      message: 'Producto guardado exitosamente',
      newProduct
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    const items: Array<IProduct> = await ProductModel.find().skip(skip).limit(limit);
    const totalItems: number = await ProductModel.countDocuments();
    res.status(200).send({
      message: 'ok',
      items,
      totalItems
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const data = await ProductModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Producto no encontrado'
    })

    res.status(200).send({
      message: 'OK',
      data
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const data = await ProductModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Producto no encontrado'
    })

    await ProductModel.findOneAndDelete({ code });

    res.status(200).send({
      message: 'Producto eliminado correctamente',
      data
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const { body } = req;
    const data = await ProductModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Producto no encontrado'
    })

    const newData = await ProductModel.findOneAndUpdate({ code }, body, { new: true });

    res.status(200).send({
      message: 'Producto actualizado correctamente',
      data: newData
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}
