import { Request, Response } from 'express';
import SheduleModel, { IShedule } from '../models/SheduleModel';

export const createShedule = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newShedule: IShedule = new SheduleModel({
      timeStart: body.timeStart,
      timeEnd: body.timeEnd,
      employee: body.employee,
      assigned: body.assigned
    })
    await newShedule.save();
    res.status(200).send({
      message: 'OK',
      data: newShedule
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    });
  }
}

export const getShedules = async (req: Request, res: Response) => {
  try {
    const items = await SheduleModel.find();
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