import { Schema, model, Document } from 'mongoose';

export interface ITest extends Document {
    name: string;
    age: number
}

const TestSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
},
    { versionKey: false }
);

TestSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject._id;
    return userObject;
};

export default model<ITest>("test", TestSchema);