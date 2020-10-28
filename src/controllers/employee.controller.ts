import { Request, Response } from 'express';
import EmployeeModel, { IEmployee } from '../models/EmployeeModel';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newEmployee: IEmployee = new EmployeeModel({
      identificationNumber: body.identificationNumber,
      identificationType: body.identificationType,
      firstName: body.firstName,
      seconName: body.seconName,
      firstLastname: body.firstLastname,
      seconLastname: body.seconLastname,
      created: new Date(),
      email: body.email,
      category: body.category,
    });

    newEmployee.code = newEmployee.firstName.substring(0, 1).toUpperCase() + newEmployee.identificationNumber + newEmployee.firstLastname.substring(0, 1).toUpperCase();
    newEmployee.created = new Date();

    await newEmployee.save();

    res.status(200).send({
      message: 'Empleado guardado exitosamente',
      newEmployee
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const getEmployees = async (req: Request, res: Response) => {
  try {
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    const items: Array<IEmployee> = await EmployeeModel.find().skip(skip).limit(limit);
    const totalItems: number = await EmployeeModel.countDocuments();
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

export const getOneEmployee = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const data = await EmployeeModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Empleado no encontrado'
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

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const data = await EmployeeModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Empleado no encontrado'
    })

    await EmployeeModel.findOneAndDelete({ code });

    res.status(200).send({
      message: 'Empleado eliminado correctamente',
      data
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const { body } = req;
    const data = await EmployeeModel.find({ code });
    if (!data) return res.status(404).send({
      message: 'Empleado no encontrado'
    })

    const newData = await EmployeeModel.findOneAndUpdate({ code }, body, { new: true });

    res.status(200).send({
      message: 'Empleado actualizado correctamente',
      data: newData
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error
    })
  }
}
