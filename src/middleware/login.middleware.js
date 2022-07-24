import HttpException from '../shared/http.exception.js';

import { authenticateToken } from '../utils/jwt.js';

const authenticateMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = await authenticateToken(token);
  if (user.user.cliente !== req.body.codCliente) {
    throw new HttpException(401, 'Cliente não autorizado a comprar com o token ativo !');
  }
  res.locals.user = user;
  next();
};

export default authenticateMiddleware;
