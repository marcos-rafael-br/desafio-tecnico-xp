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
 *          InvestimentosAcoes:
 *            type: object
 *            required:
 *              - codCliente
 *              - codAtivo
 *              - qtdAtivo
 *            properties:
 *              codCliente:
 *                type: integer
 *              codAtivo:
 *                type: integer
 *              qtdAtivo:
 *                type: integer
 *            example:
 *              codCliente: 1001
 *              codAtivo: 111
 *              qtdAtivo: 10
 */

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investimentos]
 *      description: O usuário compra um ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/InvestimentosAcoes'
 *      responses:
 *        200:
 *          content:
 *            text/plain::
 *              schema:
 *                type: string
 *                example: "compra efetuada com sucesso e saldo atual é de 896.80"
 */

/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Investimentos]
 *      description: O usuário compra um ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/InvestimentosAcoes'
 *      responses:
 *        200:
 *          content:
 *            text/plain::
 *              schema:
 *                type: string
 *                example: "venda efetuada com sucesso e saldo atual é de 1000.00"
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
 *                $ref: '#/components/schemas/ClientesAtivos'
 */

routers.use('/clientes', userController);

/**
 * @swagger
 *  tags:
 *      name: Conta
 *      description: Endpoints de conta
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Deposito e Saque:
 *            type: object
 *            required:
 *              - codCliente
 *              - valor
 *            properties:
 *              codCliente:
 *                type: number
 *              valor:
 *                type: number
 *            example:
 *              codCliente: 111
 *              valor: 1000
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *         Conta:
 *           type: object
 *           properties:
 *             codCLiente:
 *               type: number
 *             saldo:
 *               type: number
 *           example:
 *               codCLiente: 3
 *               saldo: 1000
 */

/**
 * @swagger
 *  /contas/deposito:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint para depósito na conta do usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Deposito e Saque'
 *      responses:
 *        201:
 *          content:
 *            text/plain::
 *              schema:
 *                type: object
 *                example: {"message":"deposito de R$ 1000 reais efetuado com sucesso!"}
 */

/**
 * @swagger
 *  /contas/saque:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint para saque na conta do usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Deposito e Saque'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example: {"message":"saque de R$ 1000 reais efetuado com sucesso!"}
 */

/**
  * @swagger
  *  /contas/{id}:
  *    get:
  *      tags: [Conta]
  *      description: Endpoint que retorna a conta do usuário
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
  *                type: object
  *                $ref: '#/components/schemas/Conta'
 */
routers.use('/contas', contaController);

/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: Endpoints para cadastro verificação de todos ativos e por id do ativo
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          AtivosId:
 *            type: object
 *              - codAtivo
 *              - qtdAtivo
 *              - valorAtivo
 *            properties:
 *              codAtivo:
 *                type: integer
 *              qtdAtivo:
 *                type: integer
 *              valorAtivo:
 *                type: decimal
 *            example:
 *              codAtivo: 111
 *              qtdAtivo: 10
 *              valorAtivo: 10.32
 */

/**
 * @swagger
 *  /ativos/{id}:
 *    get:
 *      tags: [Ativos]
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
 *                type: object
 *                $ref: '#/components/schemas/AtivosId'
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          AllAtivos:
 *            type: object
 *              - codAtivo
 *              - nomeAtivo
 *              - fornecimento
 *              - preçoAtivo
 *              - qtdAtivoVendida
 *              - capitalizaçãoAtivo
 *            properties:
 *              codAtivo:
 *                type: integer
 *              nomeAtivo:
 *                type: string
 *              fornecimento:
 *                type: integer
 *              preçoAtivo:
 *                type: decimal
 *              qtdAtivoVendida:
 *                type: integer
 *              capitalizaçãoAtivo:
 *                type: decimal
 *            example:
 *              codAtivo: 111
 *              nomeAtivo: "VALE3"
 *              fornecimento: 100
 *              preçoAtivo: 10.32
 *              qtdAtivoVendida: 10
 *              capitalizaçãoAtivo: 206.40
 */

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Ativos]
 *      description: Consulta os ativos de um cliente
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                $ref: '#/components/schemas/AllAtivos'
 */

routers.use('/ativos', ativosController);

export default routers;
