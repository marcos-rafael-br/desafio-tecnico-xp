import connection from "./connection.js";

// -------------------------- CREATE ----------------------------
const venda = async (codCliente, codAtivo, qtdAtivo) => {
  const [result] = await connection.execute(
    "INSERT INTO Vendas (cod_cliente, cod_ativo, qtd_ativo) VALUES (? ,?, ?)",
    [codCliente, codAtivo, qtdAtivo]
  );
  return result;
};

// -------------------------- READ ----------------------------
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

const getPortfolio = async (codCliente,codAtivo) => {
  const [result] = await connection.execute(
    "SELECT * FROM portfolio_ativos WHERE portfolio_id = ? and cod_ativo = ?",
    [codCliente, codAtivo]
  );
  return result[0];  
}

// -------------------------- UPDATE ----------------------------

const updateQtdAtivo = async (codAtivo, newQtdAtivo) => {
  const [result] = await connection.execute(
    "UPDATE Ativos SET qtd_ativo = ? WHERE cod_ativo = ?",
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

const updateSaldoAtivos = async (codCliente, codAtivo, qtdAtivo) => {
  const [result] = await connection.execute(
    "UPDATE portfolio_ativos SET qtd_ativo = qtd_ativo - ? WHERE portfolio_id = ? and cod_ativo = ?",
    [qtdAtivo, codCliente, codAtivo ]
  );
  return result;
};

export default { venda, getAtivo, getPortfolio, getSaldo, updateQtdAtivo, updateSaldo, updateSaldoAtivos };
