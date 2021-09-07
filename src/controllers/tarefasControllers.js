exports.listarTodas = (req, res) => {
    const dados = [
        {id: 1, descrição: 'Pagar contas mensais'},
        {id: 2, descrição: 'Fazer trabalhos da faculdade'}
    ]
    res.status(200)
    res.send(dados)
}

exports.listarPorId = (req, res) => {

}