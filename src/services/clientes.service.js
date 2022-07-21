import userModel from "../models/clientes.model.js";

// ------------------------------------ READ ------------------------------------
const getResumoCliente = async ({codCliente}) => {
  const cliente = await userModel.getResumoCliente(codCliente);
  if (cliente.length === 0) {
    throw new Error("Cliente não possui ativos no momento");
  }
  return cliente;
}
// ------------------------------------ CREATE ------------------------------------

const createCliente = async ({ codCliente, senha }) => {
  const cliente = await userModel.createCliente(codCliente, senha);
  return cliente;
};

const createCarteira = async ({ codCliente }) => {
  const carteira = await userModel.createCarteira(codCliente);
  return carteira;
};

const createPortfolio = async ({ codCliente }) => {
  const carteira = await userModel.createPortfolio(codCliente);
  return carteira;
};

export default { createCliente, createCarteira, createPortfolio, getResumoCliente };
