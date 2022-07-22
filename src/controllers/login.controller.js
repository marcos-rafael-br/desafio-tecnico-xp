import { Router } from 'express';
import loginService from '../services/login.service.js';

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const token = await loginService.authenticate(req.body);
  return res.status(201).json(token);
});

export default loginRouter;
