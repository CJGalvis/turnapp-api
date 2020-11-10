import { Schema, model, Document } from 'mongoose';

export interface ITenant extends Document {
    name: string;
    created: Date;
    license: string;
    email: string;
    password: string;
    phone: string;
    identification: string;
}

const TennantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre para el contrato es requerido']
    },
    created: {
        type: Date,
        default: new Date()
    },
    license: {
        type: String,
        required: [true, 'La licencia del contrato es requerida']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    phone: {
        type: String,
        required: [true, 'El teléfono es requerido']
    },
    identification: {
        type: String,
        required: [true, 'La identificación es requerida'],
        unique: true
    },
    lastSign: {
        type: Date,
        default: null
    }
}, { versionKey: false });

export default model<ITenant>("tennants", TennantSchema);