import { Router } from "express";
import validateUserCreate from "../middleware/clientes.middleware.js";
import userService from "../services/clientes.service.js";

const userController = Router();

userController.post("/cadastrar", validateUserCreate, async (req, res) => {
  const cliente = await userService.createCliente(req.body);
  await userService.createCarteira(req.body);
  await userService.createPortfolio(req.body);
  return res.status(200).json(cliente);
});

userController.get("/ativos/:id", async (req, res) => {
  const clientes = await userService.getResumoCliente(req.body);
  return res.status(200).json(clientes);
});

export default userController;
