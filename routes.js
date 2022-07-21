import { Router } from "express";
import contaController from "./src/controllers/conta.controller.js";
import investimentosController from "./src/controllers/investimentos.controller.js";
import userController from "./src/controllers/clientes.controller.js";


const routers = Router();

routers.use("/investimentos", investimentosController);

routers.use("/clientes", userController);

routers.use("/contas", contaController)

export default routers;
