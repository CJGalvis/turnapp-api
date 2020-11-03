"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const employees_routes_1 = __importDefault(require("./routes/employees.routes"));
const shedule_routes_1 = __importDefault(require("./routes/shedule.routes"));
const turns_routes_1 = __importDefault(require("./routes/turns.routes"));
const categories_routes_1 = __importDefault(require("./routes/categories.routes"));
const app = express_1.default();
//middlewares
app.use(express_fileupload_1.default());
app.use(compression_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
//routes
app.get("/", (req, res) => res.send("API REST running"));
app.use(employees_routes_1.default);
app.use(shedule_routes_1.default);
app.use(turns_routes_1.default);
app.use(categories_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map