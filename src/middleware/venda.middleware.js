import model from '../models/venda.model.js';
import helper from '../helpers/aux.model.js';

const validateVenda = async (req, res, next) => {
  const { codAtivo, /* qtdAtivo, */ codCliente } = req.body;
  const ativoData = await model.getAtivo(codAtivo);
  const cliente = await helper.getUser(codCliente);

  if (cliente === undefined) {
    return res.status(400).json({
      message: 'Cliente não cadastrado, operação negada',
    });
  }

  if (ativoData === undefined) {
    return res.status(400).json({ message: 'Ativo não encontrado' });
  }
  next();
};

export default validateVenda;
