import model from '../models/compra.model.js';
/* import helper from '../helpers/aux.model.js';
 */
const validateCompra = async (req, res, next) => {
  const { codAtivo, qtdAtivo, codCliente } = req.body;
  const ativoData = await model.getAtivo(codAtivo);
  const saldoData = await model.getSaldo(codCliente);
  /* const cliente = await helper.getUser(codCliente);
  if (cliente === undefined) {
    return res.status(400).json({
      message: 'Cliente não cadastrado, operação negada',
    });
  } */
  if (ativoData === undefined) {
    return res.status(400).json('Ativo não encontrado');
  }
  /* if (qtdAtivo > ativoData.qtd_ativo) {
    return res.status(406).json({
      message: `A quantidade máxima que voce pode comprar é ${ativoData.qtd_ativo} `,
    });
  } */
  if (saldoData.saldo < (qtdAtivo * ativoData.valor)) {
    return res.status(406).json({
      message: `Seu saldo atual é de ${saldoData.saldo}. Para efetuar essa compra seu saldo deve ser de ${qtdAtivo * ativoData.valor}`,
    });
  }
  next();
};

export default validateCompra;
