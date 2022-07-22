import connection from './connection.js';

// ------------------------------------ CREATE ------------------------------------

const createCliente = async (codCliente, senha) => {
  const [cliente] = await connection.execute(
    'INSERT INTO Clientes (cod_cliente, senha) VALUES (?, ?)',
    [codCliente, senha],
  );
  return cliente;
};

const createCarteira = async (codCliente) => {
  const [carteira] = await connection.execute(
    'INSERT INTO Carteiras (cod_cliente) VALUES (?)',
    [codCliente],
  );
  return carteira;
};

const createPortfolio = async (codCliente) => {
  const [portfolio] = await connection.execute(
    'INSERT INTO Portfolio (cod_cliente) VALUES (?)',
    [codCliente],
  );
  return portfolio;
};

// ------------------------------------ READ ------------------------------------

const getById = async (id) => {
  const [cliente] = await connection.execute(
    'SELECT * FROM Clientes WHERE cod_cliente =?',
    [id],
  );
  return cliente[0];
};

const getResumoCliente = async (id) => {
  const [cliente] = await connection.execute(
    `SELECT portfolio_id as codCliente, 
    cod_ativo as codAtivo,
    qtd_ativo as qtdAtivo,
    valor_ativo as valor
    FROM portfolio_ativos WHERE portfolio_id =? AND qtd_ativo > 0`,
    [id],
  );
  return cliente;
};

export default {
  createCliente, createCarteira, createPortfolio, getById, getResumoCliente,
};
