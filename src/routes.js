const express = require('express')
const router = express.Router()
const tarefaController = require('./controllers/tarefasControllers')


router.get('/tarefas', tarefaController.listarTodas)

module.exports = router