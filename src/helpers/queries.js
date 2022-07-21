import connection from "../models/connection.js";

// -------------------------- READ ----------------------------
const getUser = async (codCliente) => {
    const [result] = await connection.execute(
      "SELECT * FROM Clientes WHERE cod_cliente = ?",
      [codCliente]
    );
    return result[0];
  };

  export default { getUser };