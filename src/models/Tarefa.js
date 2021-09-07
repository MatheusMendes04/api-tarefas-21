const mongoose = require('mongoose')
const mogoose = require('../conection')
const Schema = mogoose.Schema

const tarefaSchema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: false
    },
    realizada: {
        type: Boolean,
        required: true 
    }
})

const Tarefa = mongoose.model("Tarefa", tarefaSchema)
module.exports = Tarefa