import { Schema, model, Document } from 'mongoose';

export interface IShedule extends Document {
  employeeCode: string;
  dateStart: Date;
  dateEnd: Date;
  type: Date;
  hours: string;
  tennant: string;
}

const SheduleSchema = new Schema({
  employeeCode: {
    type: String,
    required: [true, 'La código del empleado del turno es requerido'],
  },
  dateStart: {
    type: Date,
    required: [true, 'La fecha inicial del turno es requerida'],
  },
  dateEnd: {
    type: Date,
    required: [true, 'La fecha final del turno es requerida'],
  },
  type: {
    type: String,
    required: [true, 'El tipo de turno es requerido'],
  },
  hours: {
    type: String,
    required: [true, 'Las horas del turno es requerido'],
  },
  tennant: {
    type: Schema.Types.ObjectId,
    ref: 'tennants',
    required: [true, 'El tennant es requerido']
  }
},
  { versionKey: false }
);

export default model<IShedule>("shedules", SheduleSchema);