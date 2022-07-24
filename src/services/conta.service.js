import contaModel from '../models/conta.model.js';
import aux from '../helpers/aux.model.js';
import HttpException from '../shared/http.exception.js';
//  ---------------------------- READ ----------------------------

const getSaldo = async (id) => {
  const result = await aux.getSaldo(id);
  return { codCLiente: result.cod_cliente, saldo: result.saldo };
};

//  ---------------------------- UPDATE --------------------------

const depositar = async ({ codCliente, valor }) => {
  const cliente = await aux.getUser(codCliente);
  if (cliente === undefined) {
    throw new HttpException(400, 'Cliente não encontrado');
  }
  if (valor <= 0) {
    throw new HttpException(400, 'Favor depositar um valor maior que zero');
  }
  const result = await contaModel.depositar(codCliente, valor);
  return result;
};

const sacar = async ({ codCliente, valor }) => {
  const cliente = await aux.getUser(codCliente);
  if (cliente === undefined) {
    throw new HttpException(400, 'Cliente não encontrado');
  }
  const saldoAtual = await aux.getSaldo(codCliente);
  if (saldoAtual.saldo < valor) {
    throw new HttpException(400, `O valor de saque máximo de acordo com o saldo de sua conta é de R$ ${saldoAtual.saldo}`);
  }
  const result = await contaModel.sacar(codCliente, valor);
  return result;
};

export default { getSaldo, depositar, sacar };
