import { Request, Response } from 'express';
import TurnModel, { ITurn } from '../models/TurnModel';
import EmployeeModel from '../models/EmployeeModel';

export const createTurn = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newTurn: ITurn = new TurnModel({
      name: body.name,
      timeStart: body.timeStart,
      timeEnd: body.timeEnd,
      tenant: req.tenant
    });
    await newTurn.save();
    res.status(200).send({
      message: 'Turno guardado exitósamente',
      data: newTurn
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    });
  }
}

export const getTurns = async (req: Request, res: Response) => {
  try {
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    const items = await TurnModel.find({ tenant: req.tenant })
      .skip(skip)
      .limit(limit)
      .exec();
    const totalItems: number = await TurnModel.countDocuments({ tenant: req.tenant });

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

export const deleteTurns = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const data = await TurnModel.findById(_id);
    if (!data) return res.status(404).send({
      message: 'Turno no encontrado'
    });

    const employees = await EmployeeModel.find({ category: _id, tenant: req.tenant });
    if (employees && employees.length > 0) return res.status(400).send({
      message: 'El turno está en uso y no puede ser eliminado'
    });

    await TurnModel.findByIdAndDelete(_id);

    res.status(200).send({
      message: 'turno eliminado correctamente',
      data
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    });
  }
}

export const updateTurn = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { body } = req;
    const data = await TurnModel.findById(_id);
    if (!data) return res.status(404).send({
      message: 'Turno no encontrado'
    })

    const newData = await TurnModel.findByIdAndUpdate(_id, body, { new: true });

    res.status(200).send({
      message: 'Turno actualizado correctamente',
      data: newData
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}