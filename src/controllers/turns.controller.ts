import { Request, Response } from 'express';
import TurnModel, { ITurn } from '../models/TurnModel';

export const createTurn = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newTurn: ITurn = new TurnModel({
      name: body.name,
      timeStart: body.timeStart,
      timeEnd: body.timeEnd
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
    const items = await TurnModel.find();
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

export const deleteTurns = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const data = await TurnModel.findById(_id);
    if (!data) return res.status(404).send({
      message: 'Turno no encontrado'
    })

    await TurnModel.findByIdAndDelete(_id);

    res.status(200).send({
      message: 'turno eliminado correctamente',
      data
    })
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