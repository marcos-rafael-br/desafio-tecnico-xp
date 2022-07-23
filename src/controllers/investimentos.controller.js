import { Router } from 'express';
import validateCompra from '../middleware/compra.middleware.js';
import validateVenda from '../middleware/venda.middleware.js';
import serviceV from '../services/venda.service.js';
import serviceC from '../services/compra.service.js';

const investimentosController = Router();

investimentosController.post('/comprar', validateCompra, async (req, res) => {
  const Inputs = req.body;
  await serviceC.compra(Inputs);
  await serviceC.updateQtdAtivo(Inputs);
  const saldo = await serviceC.updateSaldo(Inputs);
  await serviceC.updateResumoAtivos(Inputs);
  res.json(`compra efetuada com sucesso e saldo atual é de ${saldo}`);
});

investimentosController.post('/vender', validateVenda, async (req, res) => {
  const Inputs = req.body;
  await serviceV.venda(Inputs);
  await serviceV.updateQtdAtivo(Inputs);
  const saldo = await serviceV.updateSaldo(Inputs);
  await serviceV.updateSaldoAtivos(Inputs);
  res.json(`venda efetuada com sucesso e saldo atual é de ${saldo}`);
});

export default investimentosController;
