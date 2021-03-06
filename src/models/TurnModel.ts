import { Schema, model, Document } from 'mongoose';

export interface ITurn extends Document {
    name: string;
    timeStart: string;
    timeEnd: string;
    tenant: string;
}

const TurnSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del turno es requerido'],
    },
    timeStart: {
        type: String,
        required: [true, 'La hora inicial del turno es requerida'],
    },
    timeEnd: {
        type: String,
        required: [true, 'La hora final del turno es requerida'],
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenants',
        required: [true, 'El tenant es requerido']
    }
},
    { versionKey: false }
);

export default model<ITurn>("turns", TurnSchema);