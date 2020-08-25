"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
}, { versionKey: false });
TestSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject._id;
    return userObject;
};
exports.default = mongoose_1.model("test", TestSchema);
//# sourceMappingURL=test.model.js.map