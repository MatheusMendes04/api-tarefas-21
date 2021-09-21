const express = require('express')
const router = express.Router()
const tarefaController = require('./controllers/tarefasControllers')

// /api/v1/tarefas
router.get('/tarefas', tarefaController.listarTodas)
router.get('/tarefas/:id', tarefaController.listarPorId)

module.exports = router