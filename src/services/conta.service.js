import contaModel from "../models/conta.model.js";

const depositar = async ({codCliente,valor}) => {
    const result = await contaModel.depositar(codCliente,valor);
    return result;
}

const sacar = async ({codCliente,valor}) => {
    const result = await contaModel.sacar(codCliente,valor);
    return result;
}

export default {depositar,sacar};