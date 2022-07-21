import connection from "../models/connection.js";

// -------------------------- READ ----------------------------
const getUser = async (codCliente) => {
  const [result] = await connection.execute(
    "SELECT * FROM Clientes WHERE cod_cliente = ?",
    [codCliente]
  );
  return result[0];
};

const getSaldo = async (codCliente) => {
  const [result] = await connection.execute(
    "SELECT * FROM Carteiras WHERE cod_cliente = ?",
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

export default { getUser, getSaldo, getAtivo };
