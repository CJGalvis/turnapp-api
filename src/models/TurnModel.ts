import { Schema, model, Document } from 'mongoose';

export interface ITurn extends Document {
    name: string;
    timeStart: Date;
    timeEnd: Date;
}

const TurnSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del turno es requerido'],
    },
    timeStart: {
        type: Date,
        required: [true, 'La hora inicial del turno es requerida'],
    },
    timeEnd: {
        type: Date,
        required: [true, 'La hora final del turno es requerida'],
    }
},
    { versionKey: false }
);

export default model<ITurn>("turns", TurnSchema);