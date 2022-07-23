import contaModel from '../models/conta.model.js';
import aux from '../helpers/aux.model.js';
//  ---------------------------- READ ----------------------------

const getSaldo = async (id) => {
  const result = await aux.getSaldo(id);
  return { codCLiente: result.cod_cliente, saldo: result.saldo };
};

//  ---------------------------- UPDATE --------------------------

const depositar = async ({ codCliente, valor }) => {
  const cliente = await aux.getUser(codCliente);
  if (cliente === undefined) {
    throw new Error('Cliente não encontrado');
  }
  const result = await contaModel.depositar(codCliente, valor);
  return result;
};

const sacar = async ({ codCliente, valor }) => {
  const cliente = await aux.getUser(codCliente);
  if (cliente === undefined) {
    throw new Error('Cliente não encontrado');
  }
  const result = await contaModel.sacar(codCliente, valor);
  return result;
};

export default { getSaldo, depositar, sacar };
