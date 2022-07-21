import connection from "./connection.js";
// -------------------------- READ ------------------------------



// -------------------------- UPDATE ----------------------------

const depositar = async (codCliente,valor) => {
    const [result] = await connection.execute(
        "UPDATE Carteiras SET saldo = saldo + ? WHERE cod_cliente = ?",
        [valor, codCliente]
      );
      return result;
}

const sacar = async (codCliente,valor) => {
    const [result] = await connection.execute(
        "UPDATE Carteiras SET saldo = saldo - ? WHERE cod_cliente = ?",
        [valor, codCliente]
      );
      return result;
}



export default {depositar,sacar};