import { Router } from "express";
import contaController from "./src/controllers/conta.controller.js";
import investimentosController from "./src/controllers/investimentos.controller.js";
import userController from "./src/controllers/clientes.controller.js";
import ativosController from "./src/controllers/ativos.controller.js";
import loginRouter from "./src/controllers/login.controller.js";
import authenticateMiddleware from "./src/middleware/login.middleware.js";

const routers = Router();

routers.use('/login', loginRouter)

routers.use("/investimentos", authenticateMiddleware, investimentosController);

routers.use("/clientes", userController);

routers.use("/contas", contaController);

routers.use("/ativos", ativosController);



export default routers;
