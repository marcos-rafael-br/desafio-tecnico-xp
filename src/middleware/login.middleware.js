import HttpException from '../shared/http.exception.js';

import { authenticateToken } from '../utils/jwt.js';

const authenticateMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = await authenticateToken(token);
  if (!user) {
    throw new HttpException(401, 'JWT malformed');
  }
  res.locals.user = user;
  next();
};

export default authenticateMiddleware;
