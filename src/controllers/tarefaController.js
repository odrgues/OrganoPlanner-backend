const Tarefa = require("../models/tarefa");

exports.getTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find({}, "-__v");
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTarefa = async (req, res) => {
  try {
    const { titulo, descricao, imagemUrl, categoria, concluida } = req.body;
    const tarefa = new Tarefa({
      titulo,
      descricao,
      imagemUrl,
      categoria,
      concluida,
    });
    await tarefa.save();
    res.status(201).json(tarefa.toObject({ versionKey: false }));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const update = {};
    if (req.body.titulo !== undefined) update.titulo = req.body.titulo;
    if (req.body.descricao !== undefined) update.descricao = req.body.descricao;
    if (req.body.imagemUrl !== undefined) update.imagemUrl = req.body.imagemUrl;
    if (req.body.categoria !== undefined) update.categoria = req.body.categoria;
    if (req.body.concluida !== undefined) update.concluida = req.body.concluida;
    if (update._id) delete update._id;
    const tarefa = await Tarefa.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      projection: "-__v",
    });
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(tarefa.toObject({ versionKey: false }));
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
      { new: true, projection: "-__v" }
    );
    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(tarefa.toObject({ versionKey: false }));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
