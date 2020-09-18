import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  value: string;
  description: string;
}

const CategorySchema = new Schema({
  value: {
    type: String,
    required: [true, 'El valor de la categoría es requerido'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'La descripción de la categoría es requerido']
  }
},
  { versionKey: false }
);

CategorySchema.methods.toJSON = function () {
  let category = this;
  let categoryObject = category.toObject();
  delete categoryObject._id;
  return categoryObject;
};

export default model<ICategory>("categories", CategorySchema);