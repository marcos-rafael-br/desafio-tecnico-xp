import pkg from 'jsonwebtoken';
import HttpException from '../shared/http.exception.js';

const { sign, verify } = pkg;

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'sonhogrande';

const jwtConfig = {
  expiresIn: '60m',
  algorithm: 'HS256',
};
const generateJWTToken = (user) => sign({ user }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    throw new HttpException(401, 'Token não informado');
  }

  try {
    const validate = verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    throw new HttpException(401, 'Token inválido');
  }
};

export { generateJWTToken, authenticateToken };
