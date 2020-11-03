import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    value: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoría es requerido'],
    },
    value: {
        type: String,
        required: [true, 'El valor de la categoría es requerido'],
    }
},
    { versionKey: false }
);

export default model<ICategory>("categories", CategorySchema);