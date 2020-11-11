import { Schema, model, Document } from 'mongoose';

export interface IIdentification extends Document {
    name: string;
    description: string;
    tennant: string;
}

const IdentificationTypeSchema = new Schema({
    value: {
        type: String,
        required: [true, 'El valor es requerido'],
    },
    description: {
        type: String,
        required: [true, 'La descripción es requerido'],
    },
    tennant: {
        type: Schema.Types.ObjectId,
        ref: 'tennants',
        required: [true, 'El tennant es requerido']
    }
},
    { versionKey: false }
);

export default model<IIdentification>("identificationTypes", IdentificationTypeSchema);