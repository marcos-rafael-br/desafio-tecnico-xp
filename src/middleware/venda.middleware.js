import model from "../models/venda.model.js";
import helper from "../helpers/aux.model.js";

const validateVenda = async (req, res, next) => {
  const { codAtivo, qtdAtivo, codCliente } = req.body;
  const ativoData = await model.getAtivo(codAtivo);
  const { qtd_ativo, cod_ativo } = await model.getPortfolio(codCliente,codAtivo);
  const cliente = await helper.getUser(codCliente);

  if (cliente === undefined) {
    return res.status(400).json({
      message: "Cliente não cadastrado, operação negada",
    });
  }

  if (ativoData === undefined) {
    return res.status(400).json({ message: "Ativo não encontrado" });
  }
  if (qtd_ativo <= 0) {
    return res.status(406).json({
      message: "Voce não possui ativos para vender",
    });
  }
  next();
};

export default validateVenda;
