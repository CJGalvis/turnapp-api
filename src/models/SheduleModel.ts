import { Schema, model, Document } from 'mongoose';

export interface IShedule extends Document {
  timeStart: Date;
  timeEnd: Date;
  employee: string;
  assigned: boolean
}

const SheduleSchema = new Schema({
  timeStart: {
    type: Date,
    required: [true, 'La hora inicial del turno es requerida'],
  },
  timeEnd: {
    type: Date,
    required: [true, 'La hora final del turno es requerida'],
  },
  employee: {
    type: String,
    default: null
  },
  assigned: {
    type: Boolean,
    default: false
  }
},
  { versionKey: false }
);

export default model<IShedule>("shedules", SheduleSchema);