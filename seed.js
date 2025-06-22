const mongoose = require("mongoose");
const Tarefa = require("./src/models/tarefa");
require("dotenv").config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/organo-planner";

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Conectado ao MongoDB");

  const tarefas = [
    {
      titulo: "Exemplo 1",
      descricao: "Primeira tarefa de exemplo",
      imagemUrl: "https://via.placeholder.com/150",
      categoria: "Estudo",
    },
    {
      titulo: "Exemplo 2",
      descricao: "Segunda tarefa de exemplo",
      imagemUrl: "https://via.placeholder.com/150",
      categoria: "Trabalho",
    },
  ];

  await Tarefa.deleteMany({});
  await Tarefa.insertMany(tarefas);
  console.log("Tarefas inseridas com sucesso!");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Erro ao popular o banco:", err);
  process.exit(1);
});
