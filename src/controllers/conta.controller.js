import { Router } from 'express';
import contaService from '../services/conta.service.js';

const contaController = Router();

contaController.post('/deposito', async (req, res) => {
  const Inputs = req.body;
  await contaService.depositar(Inputs);
  res.status(200).json({ message: `deposito de R$ ${req.body.valor} reais efetuado com sucesso!` });
});

contaController.post('/saque', async (req, res) => {
  const Inputs = req.body;
  await contaService.sacar(Inputs);
  res.status(200).json({ message: `saque de R$ ${req.body.valor} reais efetuado com sucesso!` });
});

contaController.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cliente = await contaService.getSaldo(id);
  res.status(200).json(cliente);
});

export default contaController;
