import connection from "./connection.js";

// -------------------------- CREATE ----------------------------

const compra = async (codCliente, idAtivo, qtdAtivo) => {
  const [result] = await connection.execute(
    "INSERT INTO Compras (cod_cliente, cod_ativo, qtd_ativo) VALUES (? ,?, ?)",
    [codCliente, idAtivo, qtdAtivo]
  );
  return result;
};
// -------------------------- READ --------------------------------
const getUser = async (codCliente) => {
  const [result] = await connection.execute(
    "SELECT * FROM Clientes WHERE cod_cliente = ?",
    [codCliente]
  );
  return result[0];
};

const getAtivo = async (codAtivo) => {
  const [result] = await connection.execute(
    "SELECT * FROM Ativos WHERE cod_ativo = ?",
    [codAtivo]
  );
  return result[0];
};
const getSaldo = async (codCliente) => {
  const [result] = await connection.execute(
    "SELECT saldo FROM Carteiras WHERE cod_cliente = ?",
    [codCliente]
  );
  return result[0];
};

const sumAtivos = async (codCliente, codAtivo) => {
  const [result] = await connection.execute(
    "SELECT SUM(qtd_ativo) as soma FROM Compras WHERE cod_cliente = ? and cod_ativo = ?",
    [codCliente, codAtivo]
  );
  return result[0].soma;
};

// -------------------------- UPDATE --------------------------------

const updateQtdAtivo = async (codAtivo, newQtdAtivo) => {
  const [result] = await connection.execute(
    "UPDATE Ativos SET qtd_ativo = qtd_ativo - ? WHERE cod_ativo = ?",
    [newQtdAtivo, codAtivo]
  );
  return result;
};

const updateSaldo = async (newSaldo, codCliente) => {
  const [result] = await connection.execute(
    "UPDATE Carteiras SET saldo = ? WHERE cod_cliente = ?",
    [newSaldo, codCliente]
  );
  return result;
};

const updateResumoAtivos = async (codCliente, codAtivo, sum, valor) => {
  const [result] = await connection.execute(
    `INSERT INTO portfolio_ativos (portfolio_id, cod_ativo, qtd_ativo,valor_ativo)
     VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE portfolio_id=VAlues(portfolio_id),cod_ativo=VAlues(cod_ativo),qtd_ativo=VALUES(qtd_ativo), valor_ativo=VALUES(valor_ativo)`,
    [codCliente, codAtivo, +sum, valor]
  );
  return result;
};

export default {
  compra,
  getUser,
  getAtivo,
  getSaldo,
  updateQtdAtivo,
  updateSaldo,
  sumAtivos,
  updateResumoAtivos,
};
