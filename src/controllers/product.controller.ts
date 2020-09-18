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
    const { body } = req;
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    let query = {};

    if (body.name) {
      query = Object.assign({
        name: new RegExp(`${body.name}.*`, 'i')
      }, query)
    }

    if (body.category) {
      query = Object.assign({
        category: body.category
      }, query)
    }

    if (body.price) {
      query = Object.assign({
        price: { $gte: body.price }
      }, query)
    }

    if (body.created) {
      query = Object.assign({
        $and: [
          { created: { $gte: body.startDate } },
          { created: { $lte: body.endDate } }
        ]
      }, query)
    }

    if (body.code) {
      query = {
        code: body.code
      }
    }

    const items: Array<IProduct> = await ProductModel.find(query).skip(skip).limit(limit);
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
