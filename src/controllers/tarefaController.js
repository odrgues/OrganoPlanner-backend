const Tarefa = require("../models/tarefa");

exports.getTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTarefa = async (req, res) => {
  try {
    const { titulo, descricao, imagemUrl, categoria } = req.body;
    const tarefa = new Tarefa({ titulo, descricao, imagemUrl, categoria });
    await tarefa.save();
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    // Inclui o campo concluida na atualização
    const { titulo, descricao, imagemUrl, categoria, concluida } = req.body;
    const tarefa = await Tarefa.findByIdAndUpdate(
      id,
      { titulo, descricao, imagemUrl, categoria, concluida },
      { new: true, runValidators: true }
    );
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByIdAndDelete(id);
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.marcarComoConcluida = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByIdAndUpdate(
      id,
      { concluida: true },
      { new: true }
    );
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
