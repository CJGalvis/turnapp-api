import express, { Application } from "express";
import fileUpload from 'express-fileupload';
import compression from 'compression';
import cors from 'cors';
import routes from './routes/index.routes';

const app: Application = express();

//middlewares
app.use(fileUpload());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => res.send("API REST running"));
app.use(routes);

export default app;