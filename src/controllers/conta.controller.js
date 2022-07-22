import { Router } from 'express';
import contaService from '../services/conta.service.js';

const contaController = Router();

contaController.post('/deposito', async (req, res) => {
  const Inputs = req.body;
  await contaService.depositar(Inputs);
  res.status(200).json('deposito efetuado com sucesso');
});

contaController.post('/saque', async (req, res) => {
  const Inputs = req.body;
  await contaService.sacar(Inputs);
  res.status(200).json('saque efetuado com sucesso');
});

contaController.get('/:id', async (req, res) => {
  const cliente = await contaService.getSaldo(req.body);
  return res.status(200).json(cliente);
});

export default contaController;
