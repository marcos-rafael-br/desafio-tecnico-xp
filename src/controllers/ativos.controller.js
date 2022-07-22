import { Router } from "express";
import ativoService from "../services/ativos.service.js";

const ativosController = Router();

ativosController.get("/", async (req, res) => {
    const ativo = await ativoService.sumAtivos();
    return res.status(200).json(ativo);
  });

ativosController.get("/:id", async (req, res) => {
  const ativo = await ativoService.getAtivo(req.params);
  return res.status(200).json(ativo);
});

export default ativosController;
