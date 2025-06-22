# OrganoPlanner Backend

Este é o backend do OrganoPlanner, desenvolvido em Node.js usando Express e MongoDB (Mongoose).

## Sumário
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Scripts](#scripts)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Endpoints da API](#endpoints-da-api)
- [Seed de Dados](#seed-de-dados)
- [Licença](#licença)

---

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/odrgues/OrganoPlanner-backend.git
   cd OrganoPlanner-backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração

1. Copie o arquivo `.env.example` para `.env` e configure a string de conexão do MongoDB:
   ```sh
   cp .env.example .env
   # Edite o arquivo .env conforme necessário
   ```

## Scripts
- `npm run dev` — Inicia o servidor em modo desenvolvimento com nodemon
- `npm start` — Inicia o servidor em modo produção

## Estrutura do Projeto
```
src/
  app.js           # Configuração do Express
  server.js        # Ponto de entrada do servidor
  models/
    tarefa.js      # Schema Mongoose da tarefa
  controllers/
    tarefaController.js # Lógica das rotas de tarefa
  routes/
    tarefaRoutes.js     # Rotas REST de tarefa
seed.js            # Script para popular o banco
.env.example       # Exemplo de variáveis de ambiente
```

## Variáveis de Ambiente
- `PORT` — Porta do servidor (padrão: 3000)
- `MONGODB_URI` — String de conexão do MongoDB

## Endpoints da API

### Tarefas
- `GET /tarefa` — Lista todas as tarefas
- `POST /tarefa` — Cria uma nova tarefa
  - Body JSON:
    ```json
    {
      "titulo": "Título",
      "descricao": "Descrição",
      "imagemUrl": "https://exemplo.com/imagem.jpg",
      "categoria": "Categoria"
    }
    ```
- `PUT /tarefa/:id` — Atualiza uma tarefa existente
  - Body JSON: mesmos campos do POST
- `DELETE /tarefa/:id` — Remove uma tarefa

### Health Check
- `GET /health` — Retorna `{ status: 'ok' }`

## Seed de Dados
Para popular o banco com exemplos, execute:
```sh
node seed.js
```

## Licença
MIT