import { Schema, model, Document } from 'mongoose';

export interface ITurn extends Document {
    name: string;
    timeStart: string;
    timeEnd: string;
    tennant: string;
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
    tennant: {
        type: Schema.Types.ObjectId,
        ref: 'tennants',
        required: [true, 'El tennant es requerido']
    }
},
    { versionKey: false }
);

export default model<ITurn>("turns", TurnSchema);