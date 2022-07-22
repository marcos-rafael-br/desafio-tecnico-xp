import HttpException from '../shared/http.exception.js';
import clienteModel from '../models/clientes.model.js';
import { generateJWTToken } from '../utils/jwt.js';

const authenticate = async (user) => {
  if (!user.codCliente || !user.senha) {
    throw new HttpException(401, 'Faltam dados!');
  }

  const userData = await clienteModel.getById(user.codCliente);
  if (userData.length === 0) {
    throw new HttpException(401, 'Dados incorretos!');
  }

  const token = generateJWTToken({
    cliente: userData.cod_cliente,
  });

  return { token, user: userData.cod_cliente };
};

export default { authenticate };
