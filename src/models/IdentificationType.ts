import { Schema, model, Document } from 'mongoose';

export interface IIdentification extends Document {
    name: string;
    description: string;
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
    tennat: {
        type: Schema.Types.ObjectId,
        ref: 'tennants'
    }
},
    { versionKey: false }
);

export default model<IIdentification>("identificationTypes", IdentificationTypeSchema);