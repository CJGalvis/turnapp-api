import { Schema, model, Document } from 'mongoose';

export interface ITax extends Document {
  value: string;
  description: string;
}

const TaxSchema = new Schema({
  value: {
    type: String,
    required: [true, 'El valor del impuesto es requerido'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'La descripción del impuesto es requerido'],
  }
},
  { versionKey: false }
);

TaxSchema.methods.toJSON = function () {
  let tax = this;
  let taxObject = tax.toObject();
  delete taxObject._id;
  return taxObject;
};

export default model<ITax>("taxes", TaxSchema);