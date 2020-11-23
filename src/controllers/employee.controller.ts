import { Request, Response } from 'express';
import EmployeeModel, { IEmployee } from '../models/EmployeeModel';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newEmployee: IEmployee = new EmployeeModel({
      identificationNumber: body.identificationNumber,
      identificationType: body.identificationType,
      firstName: body.firstName.toLowerCase(),
      seconName: body.seconName.toLowerCase(),
      firstLastname: body.firstLastname.toLowerCase(),
      seconLastname: body.seconLastname.toLowerCase(),
      created: new Date(),
      email: body.email,
      category: body.category,
      tenant: req.tenant
    });

    newEmployee.code = newEmployee.firstName.substring(0, 1).toUpperCase() + newEmployee.identificationNumber + newEmployee.firstLastname.substring(0, 1).toUpperCase();
    newEmployee.created = new Date();

    await newEmployee.save();

    res.status(200).send({
      message: 'Empleado guardado exitósamente',
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
    const items: Array<IEmployee> = await EmployeeModel.find({ tenant: req.tenant })
      .skip(skip)
      .limit(limit)
      .populate('category name')
      .exec();
    const totalItems: number = await EmployeeModel.countDocuments({ tenant: req.tenant });
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
    const data = await EmployeeModel.find({
      $and: [
        { code },
        { tenant: req.tenant }
      ]
    });
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
    const data = await EmployeeModel.find({
      $and: [
        { code },
        { tenant: req.tenant }
      ]
    });
    if (!data) return res.status(404).send({
      message: 'Empleado no encontrado'
    })

    await EmployeeModel.findOneAndDelete({
      $and: [
        { code },
        { tenant: req.tenant }
      ]
    });

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
    const data = await EmployeeModel.find({
      $and: [
        { code },
        { tenant: req.tenant }
      ]
    });
    if (!data) return res.status(404).send({
      message: 'Empleado no encontrado'
    })

    const dataUpdated = {
      identificationType: body.identificationType,
      firstName: body.firstName.toLowerCase(),
      seconName: body.seconName.toLowerCase(),
      firstLastname: body.firstLastname.toLowerCase(),
      seconLastname: body.seconLastname.toLowerCase(),
      email: body.email,
      category: body.category,
    }
    const newData = await EmployeeModel.findOneAndUpdate({
      $and: [
        { code },
        { tenant: req.tenant }
      ]
    }, dataUpdated, { new: true });

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

export const getEmployeesFilters = async (req: Request, res: Response) => {
  try {
    let skip = Number(req.query.skip);
    let limit = Number(req.query.limit);
    let body = {};

    if (req.body.firstName) {
      const firstName: string = req.body.firstName;
      body = Object.assign({
        $or: [
          { firstName: new RegExp(`${firstName.toLowerCase()}.*`, 'i') }
        ]
      }, body)
    }

    if (req.body.firstLastname) {
      const firstLastname: string = req.body.firstLastname;
      body = Object.assign({
        $or: [
          { firstLastname: new RegExp(`${firstLastname.toLowerCase()}.*`, 'i') }
        ]
      }, body)
    }

    if (req.body.category) {
      body = Object.assign({
        category: req.body.category
      }, body)
    }

    if (req.body.code) {
      body = {
        code: req.body.code
      }
    }
    const items: Array<IEmployee> = await EmployeeModel.find({ ...body, tenant: req.tenant })
      .skip(skip)
      .limit(limit)
      .populate('category name')
      .exec();
    const totalItems: number = await EmployeeModel.countDocuments();
    res.status(200).send({
      message: 'OK',
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

