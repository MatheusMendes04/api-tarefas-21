const Tarefa = require('../models/Tarefa')

exports.listarTodas = (req, res) => {
    try{

        Tarefa.find().then((dados) => {
            res.status(200)
            res.send(dados)
        })

    } catch (erro) {
        res.status(500)
        res.send({mensagem: erro.mensagem})
    }
}

exports.listarPorId = (req, res) => {

}