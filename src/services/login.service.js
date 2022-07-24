import HttpException from '../shared/http.exception.js';
import clienteModel from '../models/clientes.model.js';
import { generateJWTToken } from '../utils/jwt.js';

const authenticate = async (user) => {
  if (user.codCliente === undefined || user.senha === undefined) {
    throw new HttpException(401, 'Faltam dados!');
  }

  const userData = await clienteModel.getById(user.codCliente);
  if (userData === undefined) {
    throw new HttpException(401, 'Usuário não encontrado!');
  }
  if (userData.senha !== user.senha) {
    throw new HttpException(401, 'Senha Incorreta!');
  }

  const token = generateJWTToken({
    cliente: userData.cod_cliente,
  });

  return { token, user: userData.cod_cliente };
};

export default { authenticate };
