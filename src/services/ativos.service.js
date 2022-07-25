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

const getAllAtivos = async () => {
  const allAtivos = await ativoModel.getAllAtivos();
  return allAtivos.map((ativo) => ({
    codAtivo: ativo.cod_ativo,
    nomeAtivo: ativo.nome_ativo,
    fornecimento: ativo.qtd_inicial,
    preçoAtivo: ativo.valor,
    qtdAtivoVendida: ativo.qtd_inicial - ativo.qtd_ativo,
    capitalizaçãoAtivo: (+ativo.valor * (ativo.qtd_inicial - ativo.qtd_ativo)).toFixed(2),
  }));
};

export default { getAtivo, getAllAtivos };
