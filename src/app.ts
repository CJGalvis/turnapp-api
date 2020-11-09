import express, { Application } from "express";
import fileUpload from 'express-fileupload';
import compression from 'compression';
import cors from 'cors';
import routesEmployees from './routes/employees.routes';
import routesShedules from './routes/shedule.routes';
import routesTurns from './routes/turns.routes';
import routesCategories from './routes/categories.routes';
import routesIdentification from './routes/identification.routes';

const app: Application = express();

//middlewares
app.use(fileUpload());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => res.send("API REST running"));
app.use(routesEmployees);
app.use(routesShedules);
app.use(routesTurns);
app.use(routesCategories);
app.use(routesIdentification);

export default app;