import { Router } from "express";
import contaService from "../services/conta.service.js";

const contaController = Router();

contaController.post(
  "/deposito",
  /* validateCompra, */ async (req, res) => {
    const Inputs = req.body;
    await contaService.depositar(Inputs);
    res.json("deposito efetuado com sucesso");
  }
);

contaController.post(
  "/saque",
  /* validateCompra, */ async (req, res) => {
    const Inputs = req.body;
    await contaService.sacar(Inputs);
    res.json("saque efetuado com sucesso");
  }
);

contaController.get("/:id", async (req, res) => {
  const clientes = await userService.getResumoCliente(req.body);
  return res.status(200).json(clientes);
});

export default contaController;
