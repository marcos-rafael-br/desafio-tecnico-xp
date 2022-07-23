import aux from '../helpers/aux.model.js';
import ativoModel from '../models/ativos.model.js';
import HttpException from '../shared/http.exception.js';

const getAtivo = async ({ id }) => {
  const ativo = await aux.getAtivo(id);
  if (!ativo) {
    throw new HttpException(404, 'Ativo não encontrado');
  }
  return {
    codAtivo: ativo.cod_ativo,
    qtdAtivo: ativo.qtd_ativo,
    valorAtivo: ativo.valor,
  };
};

const sumAtivos = async () => {
  const result = await ativoModel.sumAtivos();
  return result.map((ativo) => ({
    codAtivo: ativo.cod_ativo,
    /*  qtdAtivo: ativo.sum, */
    valorInvestido: ativo.sum * ativo.valor_ativo,
  }));
};

export default { getAtivo, sumAtivos };
