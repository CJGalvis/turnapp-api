import { Schema, model, Document } from 'mongoose';

export interface IShedule extends Document {
  employeeCode: string;
  date: Date;
  type: Date;
  hours: string;
  assigned: boolean
}

const SheduleSchema = new Schema({
  employeeCode: {
    type: String,
    required: [true, 'La código del empleado del turno es requerido'],
  },
  date: {
    type: Date,
    required: [true, 'La fecha del turno es requerida'],
  },
  type: {
    type: String,
    required: [true, 'El tipo de turno es requerido'],
  },
  hours: {
    type: String,
    required: [true, 'Las horas del turno es requerido'],
  },
  assigned: {
    type: Boolean,
    default: false
  }
},
  { versionKey: false }
);

export default model<IShedule>("shedules", SheduleSchema);