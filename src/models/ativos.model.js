import connection from './connection.js';

const getAllAtivos = async () => {
  const [result] = await connection.query(
    'SELECT * FROM Ativos',
  );
  return result;
};

const sumAtivos = async () => {
  const [result] = await connection.execute(
    `SELECT cod_ativo, SUM(qtd_ativo) AS sum,
     valor_ativo FROM portfolio_ativos GROUP BY 
     cod_ativo, valor_ativo;`,
    /*  [codCliente, codAtivo] */
  );
  return result;
};

export default { sumAtivos, getAllAtivos };
