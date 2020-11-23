import { Request, Response } from 'express';
import SheduleModel, { IShedule } from '../models/SheduleModel';

export const createShedule = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newShedule: IShedule = new SheduleModel({
      employeeCode: body.employeeCode,
      dateStart: body.dateStart,
      dateEnd: body.dateEnd,
      type: body.type,
      hours: body.hours,
      tenant: req.tenant
    })
    await newShedule.save();
    res.status(200).send({
      message: 'Horario guardado exitósamente',
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
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    const items = await SheduleModel.find({ tenant: req.tenant })
      .skip(skip)
      .limit(limit)
      .exec();
    const totalItems: number = await SheduleModel.countDocuments({ tenant: req.tenant });

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