const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    imagemUrl: { type: String, required: true },
    categoria: { type: String, required: true },
    concluida: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tarefa", tarefaSchema);
