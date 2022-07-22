import model from '../models/venda.model.js';

const venda = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await model.venda(codCliente, codAtivo, qtdAtivo);
};

const updateQtdAtivo = async ({ codAtivo, qtdAtivo }) => {
  const { qtd_ativo } = await model.getAtivo(codAtivo);
  const newQtdAtivo = qtd_ativo + qtdAtivo;
  await model.updateQtdAtivo(codAtivo, newQtdAtivo);
};

const updateSaldo = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const { valor } = await model.getAtivo(codAtivo);
  const credito = +valor * qtdAtivo;
  const { saldo } = await model.getSaldo(codCliente);
  const newSaldo = +saldo + credito;
  await model.updateSaldo(newSaldo, codCliente);
  return newSaldo;
};

const updateSaldoAtivos = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await model.updateSaldoAtivos(codCliente, codAtivo, qtdAtivo);
};

export default {
  venda, updateQtdAtivo, updateSaldo, updateSaldoAtivos,
};
