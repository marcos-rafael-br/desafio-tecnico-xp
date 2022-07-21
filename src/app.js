import express, { json } from "express";
import routers from "../routes.js";
import httpErrorMiddleware from "./middleware/http.erro.middleware.js";
const app = express();

app.use(json());

app.use(routers);

app.use(httpErrorMiddleware);

export default app;
