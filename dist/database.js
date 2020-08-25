"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = process.env.URL_DB || '';
mongoose_1.default.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then((db) => {
    console.log(`Database ${process.env.ENV_RUN} is connected`);
})
    .catch((err) => {
    console.log('Error connect DB');
});
//# sourceMappingURL=database.js.map