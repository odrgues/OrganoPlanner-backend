# OrganoPlanner Backend

Backend do OrganoPlanner, desenvolvido em Node.js, Express e MongoDB (Mongoose).

---

## Sumário
- Instalação
- Configuração
- Scripts
- Estrutura do Projeto
- Variáveis de Ambiente
- Endpoints da API
- Seed de Dados
- Deploy no Render
- Licença

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

---

## Configuração

1. Copie o arquivo de exemplo de variáveis de ambiente:
   ```sh
   cp .env.example .env
   ```
2. Edite o `.env` e configure sua string de conexão do MongoDB:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/organo-planner?retryWrites=true&w=majority&appName=Cluster0
   ```

---

## Scripts

- `npm run dev` — Inicia o servidor em modo desenvolvimento (nodemon)
- `npm start` — Inicia o servidor em modo produção

---

## Estrutura do Projeto

```
src/
  app.js                # Configuração do Express
  server.js             # Inicialização do servidor
  models/
    tarefa.js           # Schema da tarefa
  controllers/
    tarefaController.js # Lógica das rotas
  routes/
    tarefaRoutes.js     # Rotas REST de tarefa
seed.js                 # Script para popular o banco
.env.example            # Exemplo de variáveis de ambiente
.gitignore
README.md
```

---

## Variáveis de Ambiente

- `PORT` — Porta do servidor (ex: 3000)
- `MONGODB_URI` — String de conexão do MongoDB

---

## Endpoints da API

### Tarefas

- `GET /tarefa` — Lista todas as tarefas
- `POST /tarefa` — Cria uma nova tarefa  
  **Body:**
  ```json
  {
    "titulo": "Título",
    "descricao": "Descrição",
    "imagemUrl": "https://exemplo.com/imagem.jpg",
    "categoria": "Categoria"
  }
  ```
- `PUT /tarefa/:id` — Atualiza uma tarefa  
  **Body:** igual ao POST
- `DELETE /tarefa/:id` — Remove uma tarefa

### Health Check

- `GET /health` — Retorna `{ "status": "ok" }`

---

## Seed de Dados

Para popular o banco com tarefas de exemplo, execute:

```sh
node seed.js
```

---

## Deploy no Render

1. Crie um novo serviço Web Service no [Render](https://render.com/).
2. Configure as variáveis de ambiente `PORT` e `MONGODB_URI`.
3. Certifique-se de que seu app escuta na porta definida por `process.env.PORT`.
4. Se receber erro de "Port scan timeout", confira se o servidor está ouvindo na porta correta e que não há bloqueio de firewall.

---

## Licença

MIT
