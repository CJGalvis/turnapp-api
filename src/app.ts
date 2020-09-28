import express, { Application } from "express";
import fileUpload from 'express-fileupload';
import compression from 'compression';
import cors from 'cors';
import routes from './routes/index.routes';
import routesProducts from './routes/products.routes';
import routesCategories from './routes/category.routes';
import routesTaxes from './routes/taxes.routes';

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
app.use(routesProducts);
app.use(routesCategories);
app.use(routesTaxes);

export default app;