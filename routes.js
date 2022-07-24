import { Router } from 'express';
import contaController from './src/controllers/conta.controller.js';
import investimentosController from './src/controllers/investimentos.controller.js';
import userController from './src/controllers/clientes.controller.js';
import ativosController from './src/controllers/ativos.controller.js';
import loginRouter from './src/controllers/login.controller.js';
import authenticateMiddleware from './src/middleware/login.middleware.js';

const routers = Router();

/**
 * @swagger
 *  tags:
 *    name: Login
 *    description: Endpoints para login de clientes e geração de token
 */

/**
 * @swagger
 *  /login:
 *    post:
 *      tags: [Login]
 *      description: Gera um token para o cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/ClientesCadastro'
 *      responses:
 *        200:
 *          content:
 *            text/plain::
 *              schema:
 *                type: object
 *                example: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNsaWVudGUiOjF9LCJpYXQiOjE2NTg2OTc1MzEsImV4cCI6MTY1ODcwMTEzMX0.GW8zWysGvxIlggkSxJdrXUkw5YVZpRo-yqV7jOPusho", "user": 1}
 */

routers.use('/login', loginRouter);

/**
 * @swagger
 *  tags:
 *    name: Investimentos
 *    description: Endpoints para login de clientes e geração de token
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          ClientesCadastro:
 *            type: object
 *            required:
 *              - codCliente
 *              - codAtivo
 *              - qtdAtivo
 *            properties:
 *              codCliente:
 *                type: integer
 *              senha:
 *                type: string
 *            example:
 *              codCliente: 1001
 *              senha: senha123
 */

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investimentos]
 *      description: O usuário compra um ativo
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/ClientesCadastro'
 *      responses:
 *        200:
 *          content:
 *            text/plain::
 *              schema:
 *                type: object
 *                example: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNsaWVudGUiOjF9LCJpYXQiOjE2NTg2OTc1MzEsImV4cCI6MTY1ODcwMTEzMX0.GW8zWysGvxIlggkSxJdrXUkw5YVZpRo-yqV7jOPusho", "user": 1}
 */

routers.use('/investimentos', authenticateMiddleware, investimentosController);

/**
 * @swagger
 *  tags:
 *    name: Clientes
 *    description: Endpoints para cadastro de clientes e consulta de ativos por id do cliente
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          ClientesCadastro:
 *            type: object
 *            required:
 *              - codCliente
 *              - senha
 *            properties:
 *              codCliente:
 *                type: integer
 *              senha:
 *                type: string
 *            example:
 *              codCliente: 1001
 *              senha: senha123
 */

/**
 * @swagger
 *  /clientes/cadastrar:
 *    post:
 *      tags: [Clientes]
 *      description: Cadastra um novo cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/ClientesCadastro'
 *      responses:
 *        200:
 *          content:
 *            text/plain::
 *              schema:
 *                type: object
 *                example: {"message":"Cliente cadastrado com sucesso!"}
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          ClientesAtivos:
 *            type: object
 *              - codCliente
 *              - codAtivo
 *              - qtdAtivo
 *              - valor
 *            properties:
 *              codCliente:
 *                type: integer
 *              codAtivo:
 *                type: integer
 *              qtdAtivo:
 *                type: integer
 *              valor:
 *                type: decimal
 *            example:
 *              codCliente: 1001
 *              codAtivo: 111
 *              qtdAtivo: 10
 *              valor: 100.00
 */

/**
 * @swagger
 *  /clientes/ativos/{id}:
 *    get:
 *      tags: [Clientes]
 *      description: Consulta os ativos de um cliente
 *      parameters:
 *        - in: path
 *          name: id
 *          type: number
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items: #/components/schemas/ClientesAtivos
 */

routers.use('/clientes', userController);

routers.use('/contas', contaController);

routers.use('/ativos', ativosController);

export default routers;
