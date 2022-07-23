import { Router } from 'express';
import validateUserCreate from '../middleware/clientes.middleware.js';
import clienteService from '../services/clientes.service.js';

const userController = Router();

userController.post('/cadastrar', validateUserCreate, async (req, res) => {
  await clienteService.createCliente(req.body);
  await clienteService.createCarteira(req.body);
  await clienteService.createPortfolio(req.body);
  return res.status(200).json({ message: 'Cliente cadastrado com sucesso!' });
});

userController.get('/ativos/:id', async (req, res) => {
  const clientes = await clienteService.getResumoCliente(req.params);
  return res.status(200).json(clientes);
});

export default userController;
