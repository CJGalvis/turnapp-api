import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    description: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoría es requerido'],
    },
    description: {
        type: String,
        required: [true, 'El valor de la categoría es requerido'],
    },
    tennat: {
        type: Schema.Types.ObjectId,
        ref: 'tennants'
    }
},
    { versionKey: false }
);

export default model<ICategory>("categories", CategorySchema);