import { Request, Response } from 'express';
import SheduleModel, { IShedule } from '../models/SheduleModel';
import EmployeeModel from '../models/EmployeeModel';

export const createShedule = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const employee = await EmployeeModel.find({ code: body.employeeCode, tenant: req.tenant });
    if (!employee) return res.status(400).send({
      message: 'El empleado no existe o el código es incorrecto'
    });

    const shedulesEmployee = await SheduleModel.find({ employeeCode: body.employeeCode, tenant: req.tenant });
    console.log(shedulesEmployee);
    if (shedulesEmployee && shedulesEmployee.length > 0) {
      shedulesEmployee.forEach((item: IShedule) => {
        if (body.dateStart >= item.dateStart && body.dateEnd <= item.dateEnd) {
          return res.status(400).send({
            message: 'Existen solapes en los turnos del empleado seleccionado'
          });
        }
      });
    }

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
      .populate('type name')
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

export const deleteShedule = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const data = await SheduleModel.findById(_id);
    if (!data) return res.status(404).send({
      message: 'Horario no encontrado'
    });

    const employees = await EmployeeModel.find({ category: _id, tenant: req.tenant });
    if (employees && employees.length > 0) return res.status(400).send({
      message: 'El horario está en uso y no puede ser eliminado'
    });

    await SheduleModel.findByIdAndDelete(_id);

    res.status(200).send({
      message: 'horario eliminado correctamente',
      data
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    });
  }
}

export const updateShedule = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { body } = req;
    const data = await SheduleModel.findById(_id);
    if (!data) return res.status(404).send({
      message: 'horario no encontrada'
    })

    const newData = await SheduleModel.findByIdAndUpdate(_id, body, { new: true });

    res.status(200).send({
      message: 'horario actualizado correctamente',
      data: newData
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}