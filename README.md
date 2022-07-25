# Boas vindas a solução do desafio técnico de BackEnd oferecido pela XP Inc.

Olá, me chamo Marcos Rafael, desenvolvedor fullStack e esta é minha entrega para o desafio técnico da XP Inc.

Para o desenvolvimento desse desafio, ao falar sobre desenvolvimento da aplicação escolhi não utilizar uma ORM devido ao pouco contato que tive com Sequelize, então me senti mais confortável em usar apenas queries de MySql. Vale comentar também sobre o não uso do TypeScript devido a tê-lo conhecido e utilizado somente nas ultimas 2 semanas.

Sobre a proposta de ... desenvolver uma aplicação que se assemelha ao nosso dia a
dia, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital ... a estrutura desenvolvida não foi pensada como um livro de ofertas onde uma proposta de compra deve encontrar uma proposta de venda, mas sim como se uma empresa tivesse ações que pudessem ser compradas por ela e também revendidas a ela com um preço estático.

Para executar o projeto, foi elaborada uma sequencia de orientações descritas a seguir, e para dúvidas ou contribuições, favor abrir uma issue ou entrar em contato pelo email: mrpf10@hotmail.com. 

# Entregas

<details>
  <summary><strong> Desenvolvimento</strong></summary><br />

  Projeto desenvolvido para o Desafio Técnico da XP Inc. Foi escolhido o desafio de backend, utilizando o Node.js e MySql para construção da API apresentada a seguir, com o objetivo de simular um aplicativo de investimento em ações, com algumas funções de conta digital, e dados fictícios para demonstrar o funcionamento da aplicação.
  
  
  A arquitetura utilizada foi a MSC, buscando implementar os princípios Restful, além das bibliotecas express, express-async errors, nodemon, dotenv, jsonwebtoken, mysql2, mysql-import, swagger e eslint para tratamento, autenticação, validação das entidades, e manutenção da qualidade do código.
 

</details>

<details>
  <summary><strong> Período de entrega</strong></summary><br />
  
  * Projeto individual
  * Foram `9` dias de projeto
  * Do dia `15/07/2022 09:00` ao dia: `24/07/2022 23:59`

</details>

# Orientações

<details>
  <summary><strong> Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `xp_api`.
  - A partir daqui você pode rodar o container `xp_api` via CLI ou abri-lo no VS Code.
  - Importante parar o serviço MySql se estiver rodando. (sudo service mysql stop)
  - A porta 3001 esta configurada para ser utilizada pelo app.

  > Use o comando `docker exec -it xp_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  ✨ **Rode o comando** `npm run dev` para startar o servidor com o nodemom e conseguir fazer as requisições. 

 ✨ **Rode o comando** `npm run restore` para que o banco de dados possa ser populado com as informações fixas necessárias e assim possa ser testado pelo usuário.

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
  
  ✨ **Atenção:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Atenção:** Recomenda-se a versão 16 ou superior do `node`, versão em que a aplicação foi desenvolvida.

  ✨ **Atenção:** É necessário renomear o arquivo `.env.example` para `.env` e passar suas variáveis de ambiente.

  ✨ **Rode o comando** `npm run dev` para startar o servidor com o nodemom e conseguir fazer as requisições.

  ✨ **Rode o comando** `npm run restore` para que o banco de dados possa ser populado com as informações fixas necessárias e assim possa ser testado pelo usuário`

  <br/>
</details>


<details>
  <summary><strong> Linter</strong></summary><br />

  Foi utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

  Caso queira utilizar o `ESLint` durante a execução do projeto, use o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`: bastar ir em _extensions_ e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
</details>


<details>
  <summary><strong> Testes</strong></summary><br />

  Não foi possível implementar os testes devido ao tempo gasto até as últimas horas do desafio no que vou apresentar , porém no decorrer do projeto ficou evidente a importância de tais, uma vez que testar os resultados das funções consultando manualmente os retornos no banco local e postman é cansativo e induz a erros.

</details>

<details>
  <summary  id="diagrama"><strong> Entidades</strong></summary>

  
  ---

  #### Formato das entidades

  
  Segue os exemplos com a descrição das tabelas do banco de dados:

  - Uma tabela chamada **Clientes**, contendo dados com a seguinte estrutura:

    ```json
    {
      "cod_cliente": 12399999900,
      "nome": "Marcos",
      "senha": "123456"
    }
    ```
  
  - Uma tabela chamada **Ativos**, contendo dados com a seguinte estrutura:

    ```json
    {
      "cod_ativo": 11,
      "qtd_ativo":100,
      "nome_ativo": "PETR4",
      "valor": 10.32,
      "qtd_inicial": 100
    }
    ```

  - Uma tabela chamada **Portfolio**, contendo dados com a seguinte estrutura:

    ```json
    {
      "cod_cliente": 1,
    }
    ```

  - Uma tabela chamada **portfolio_ativos**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    ```json
    {
      "portfolio_id": 1, // Chave primária e estrangeira, referenciando o id de `Assets`
      "cod_ativo": 1, // Chave primária e estrangeira, referenciando o id de `Clients`
      "qtd_ativo": 10,
      "valor_ativo": 10.32
    }
    ```

  - Uma tabela chamada **Compras**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 1,
      "cod_cliente": 1, 
      "cod_ativo": 1, 
      "qtd_ativo": 10,
    }
    ```

  - Uma tabela chamada **Vendas**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 1,
      "cod_cliente": 1, 
      "cod_ativo": 1, 
      "qtd_ativo": 10,
    }
    ```

  - Uma tabela chamada **Carteiras**, contendo dados com a seguinte estrutura:

    ```json
    {
      "cod_cliente": 11,
      "saldo": 300.00
    }  
    ``` 

    *Os dados acima e do banco de dados são fictícios, e estão aqui apenas para simular o funcionamento da API de acordo ao Desafio XP.*

    ---

<br />

</details>

<details><summary><strong> Deploy da API</strong></summary><br />

O deploy da api foi feito usando o Heroku, e seu AddOn ClearDB MySQL.

Link: https://api-assets.herokuapp.com/ativos

A api pode ser consultada através de ferramentas como o postman e também consumida por uma aplicação FrontEnd.


</details>

<details><summary><strong> Swagger </strong></summary><br />

O link para acesso ao Swagger é:

Link: https://api-assets.herokuapp.com/docs, devendo trocar o server de localHost para a api.

Ele também pode consultado no localHost:{porta}

</details>

<details>
  <summary><strong> Mande seu feedback sobre o projeto!</strong></summary><br />

Se estiver a vontade, clone o repositório e, seja com ou sem o Docker, execute, veja o deploy e me ajude a melhorar este projeto! Seu feedback será super bem vindo!


</details>

