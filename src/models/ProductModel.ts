import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  code: string;
  name: string;
  price: number;
  created: Date;
  category: string;
  tax?: string;
  description?: string;
  priceCost?: number;
  enable?: boolean;
  stock?: number;
}

const ProductSchema = new Schema({
  code: {
    type: String,
    required: [true, 'El código del producto es requerido'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'El nombre del producto es requerido']
  },
  price: {
    type: Number,
    required: [true, 'El precio del producto es requerido']
  },
  created: {
    type: Date,
  },
  category: {
    type: String,
    required: [true, 'La categpría del producto es requerida']
  },
  tax: {
    type: String,
    required: [true, 'El impuesto del producto es requerido']
  },
  description: {
    type: String,
  },
  priceCost: {
    type: Number,
    required: [true, 'El precio de costo del producto es requerido']
  },
  enable: {
    type: Boolean,
    default: false
  },
  stock: {
    type: Number,
    default: 0
  },
},
  { versionKey: false }
);

export default model<IProduct>("products", ProductSchema);