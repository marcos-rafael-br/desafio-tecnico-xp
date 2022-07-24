import express, { json } from 'express';
import 'express-async-errors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routers from '../routes.js';
import swaggerConfig from './docs/swagger.config.js';
import httpErrorMiddleware from './middleware/http.erro.middleware.js';

const app = express();

app.use(json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routers);

app.use(httpErrorMiddleware);

export default app;
