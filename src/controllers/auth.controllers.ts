import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import TennantModel, { ITenant } from '../models/TennantModel';

export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const data: ITenant | null = await TennantModel.findOne({ email });
        if (!data)
            return res.status(404).send({
                message: 'El usuario no existe o la información no es correcta'
            });

        if (!bcrypt.compareSync(password, data.password))
            return res.status(400).send({
                message: 'Usuario o contraseña incorrectos'
            });

        await TennantModel.findOneAndUpdate({ email }, { $set: { lastSign: new Date() } });
        const payload = JSON.parse(JSON.stringify({ name: data.name, id: data._id }));
        const token = jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: process.env.EXPIRES_TOKEN });
        res.status(200).send({
            message: 'OK',
            token
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        let data = await TennantModel.findOne({ email: body.email });
        if (data) return res.status(400).send({
            message: 'El email ya está en uso'
        });

        data = await TennantModel.findOne({ identification: body.identification });
        if (data) return res.status(400).send({
            message: 'La identificación ya está en uso'
        });

        const payloadLicense = JSON.parse(JSON.stringify({ name: body.name, email: body.email }));
        const tokenLicense = jwt.sign(payloadLicense, process.env.JWT_SECRET_LICENSE || '', { expiresIn: process.env.EXPIRES_TOKEN_LICENSE });
        const newTennant = new TennantModel({
            name: body.name,
            created: new Date(),
            license: tokenLicense,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            phone: body.phone,
            identification: body.identification
        });
        await newTennant.save();
        res.status(200).send({
            message: 'Contrato creado correctamente',
            data: newTennant
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
}

export const currentUser = async (req: Request, res: Response) => {
    try {
        const data = await TennantModel.find({ identification: req.tennant });
        res.status(200).send({
            message: 'OK',
            data
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error interno del servidor',
            error
        });
    }
}