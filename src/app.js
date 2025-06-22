require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tarefaRoutes = require("./routes/tarefaRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/tarefa", tarefaRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
