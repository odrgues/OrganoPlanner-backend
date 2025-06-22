const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController");
const Tarefa = require("../models/tarefa");

router.get("/", tarefaController.getTarefas);
router.post("/", tarefaController.createTarefa);
router.put("/:id", tarefaController.updateTarefa);
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tarefaDeletada = await Tarefa.findByIdAndDelete(id);
    if (!tarefaDeletada) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json({
      message: "Tarefa deletada com sucesso",
      tarefa: tarefaDeletada,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa" });
  }
});

module.exports = router;
