const express = require('express')

const app = express()
app.use(express.json())
app.use(espress.urlencoded({extended: true}))


// Rotas 
app.get('/produtos', (req, res) => {

    const dados = [
        {'id': 1, 'descrição': 'Sabão em pó', 'quantidade': 2},
        {'id': 2, 'descrição': 'Sabão de barra', 'quantidade': 15},
        {'id': 3, 'descrição': 'Pasta de dente', 'quantidade': 20}
    ]

    res.status(200)
    res.send(dados)
    console.log('Consultando na rota /produtos')
})

const port = 3007

app.listen(port, () =>{
    console.log('Servidor rodando na porta ${port}')
})