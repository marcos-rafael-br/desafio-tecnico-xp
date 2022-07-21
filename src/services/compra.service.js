import model from "../models/compra.model.js";

// -------------------------- CREATE ----------------------------

const compra = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const {cod_ativo} = await model.getAtivo(codAtivo);
  await model.compra(codCliente, cod_ativo, qtdAtivo);
};

// -------------------------- UPDATE ----------------------------

const updateQtdAtivo = async ({ codAtivo, qtdAtivo }) => {
 /*  const { qtd_ativo } = await model.getAtivo(codAtivo);
  const newQtdAtivo = qtd_ativo - qtdAtivo; */
  return await model.updateQtdAtivo(codAtivo, qtdAtivo);
};

const updateSaldo = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const { valor } = await model.getAtivo(codAtivo);
  const debito = +valor * qtdAtivo;
  const { saldo } = await model.getSaldo(codCliente);
  const newSaldo = +saldo - debito;
  await model.updateSaldo(newSaldo, codCliente);
  return newSaldo;
};

const updateResumoAtivos = async ({ codCliente, codAtivo }) => {
  const sum = await model.sumAtivos(codCliente, codAtivo);
  const { valor } = await model.getAtivo(codAtivo);
  return await model.updateResumoAtivos(codCliente, codAtivo, sum, valor);
};

export default { compra, updateQtdAtivo, updateSaldo, updateResumoAtivos };
