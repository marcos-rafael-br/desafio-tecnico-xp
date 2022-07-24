# Boas vindas a solução do desafio técnico de BackEnd oferecido pela XP Inc.

Para executar o projeto, foi elaborada uma sequencia de orientações descritas a seguir, e para dúvidas ou contribuições, favor abrir uma issue ou entrar em contato pelo email: mrpf10@hotmail.com. 

# Entregas

<details>
  <summary><strong> Desenvolvimento</strong></summary><br />

  Projeto desenvolvido para o Desafio Técnico da XP Inc. Foi escolhido o desafio de backend, utilizando o Node.js e MySql para construção da API apresentada a seguir, com o objetivo de simular um aplicativo de investimento em ações, com algumas funções de conta digital, e dados fictícios para demonstrar o funcionamento da aplicação.
  
  
  A arquitetura utilizada foi a MSC, buscando implementar os princípios Restful, além das bibliotecas express, express-async errors, nodemon, dotenv, jsonwebtoken, mysql2, mysql-import e eslint para tratamento, autenticação, validação das entidades, e manutenção da qualidade do código.
 

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

  > Use o comando `docker exec -it xp_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

 

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
  
  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** Recomenda-se a versão 16 ou superior do `node`, versão em que a aplicação foi desenvolvida.

  ✨ **Rode o comando** `npm run restore para que o banco de dados possa ser populado com as informações fixas necessárias e assim possa ser testado pelo usuario`

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

  Foram utilizadas as bibliotecas Mocha, chai e sinon para desenvolvimento dos testes unitários. 

  A cobertura mínima do código definida foi de 70%, melhor descrita na seção de implementações.

  **_Para executar os testes localmente, digite no terminal o comando `npm test`._**

</details>

<details>
  <summary  id="diagrama"><strong> Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  Em construção.....

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
      "nome_ativo": "BTC",
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


</details>

<details>
  <summary><strong> Mande seu feedback sobre o projeto!</strong></summary><br />

Se estiver a vontade, clone o repositório e, seja com ou sem o Docker, execute, veja o deploy e me ajude a melhorar este projeto! Seu feedback será super bem vindo!


</details>



# Implementações

<details>
  <summary><strong> Contextualizando </strong></summary><br />

Em construção...  

</details>

### 1 - Através do endpoint POST `/investimentos/comprar`

- O endpoint é acessível através do caminho `/investimentos/comprar`;
- O endpoint deve ser capaz de executar uma ordem de compra à tabela `bid` no banco de dados;
- O corpo da requisição segue o formato abaixo:
  ```json
  {
    "codCliente": 1,
    "codAtivo":222,
    "qtdAtivo":10
  }
  ```

<details>
  <summary><strong> Validações </strong></summary>

  * **[Será validado que não é possível executar uma ordem de compra com a quantidade maior do que o tag along]**
  - Se o campo `bid_qtd` tiver um valor maior que o total de ações negociáveis, coluna `shares` da tabela Assets, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"bid_qtd\" must be less or equal the tag along"
    }
    ```
</details>

---