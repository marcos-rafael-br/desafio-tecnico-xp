import aux from "../helpers/aux.model.js";

const getAtivo = async ({ id }) => {
  const ativo = await aux.getAtivo(id);
  return {
    codAtivo: ativo.cod_ativo,
    qtdAtivo: ativo.qtd_ativo,
    valorAtivo: ativo.valor,
  };
};

export default { getAtivo };
