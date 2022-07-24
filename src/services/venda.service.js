import model from '../models/venda.model.js';
import HttpException from '../shared/http.exception.js';

const venda = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const portfolio = await model.getPortfolio(codCliente, codAtivo);
  if (portfolio.qtd_ativo < qtdAtivo) {
    throw new HttpException(406, `Voce possui apenas ${portfolio.qtd_ativo} cotas do ativo ${codAtivo} para vender`);
  }
  await model.venda(codCliente, codAtivo, qtdAtivo);
};

const updateQtdAtivo = async ({ codAtivo, qtdAtivo }) => {
  const ativo = await model.getAtivo(codAtivo);
  const newQtdAtivo = ativo.qtd_ativo + qtdAtivo;
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
