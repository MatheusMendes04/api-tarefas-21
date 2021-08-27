## Mostrar os bancos de dados
show dbs

## Utilizar um banco de dados
use db_tarefas

## Collections tarefas
db.tarefas.insertOne({
    "descricao": "Pagar conta de energia",
    "feito": false
})
db.tarefas.insertOne({
    "descricao": "Entregar a tarefa de matemática",
    "feito": true
})

db.tarefas.find()
db.tarefas.find( {"feito": true} )

db.tarefas.insertOne({
    "descricao": "Trabalho de banco de dados",
    "Subtarefas": [
        { "item": "Ler o livro", "feito": false},
        { "item": "Entregar a atividade no ava", "feito": false},
        { "item": "Fazer teste", "feito": false},
        { "item": "Prototipar", "feito": false}
    ]
})