/* const jwt = require('jsonwebtoken');
const { constructError } = require('../middlewares/error');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1440m', // tempo da seção (1 dia)
  algorithm: 'HS256',
};
// proccesso de criação do token, enviando o payload que fica acessivel no front

const generateJWTToken = ({ id, displayName, email, password, image }) =>
  jwt.sign({ id, displayName, email, password, image }, JWT_SECRET, jwtConfig);

// validação do token e vendo se bate com a assinatura

const authenticateToken = (token) => {
  if (!token) {
    throw constructError(401, 'Token not found');
  }
  try {
    const validate = jwt.verify(token, JWT_SECRET);
    return validate;
  } catch (error) {
    throw constructError(401, 'Expired or invalid token');
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
}; */