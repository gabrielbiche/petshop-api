const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send('Você esta na rota de atendimentos, method get'))

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('Voce esta na rota de atendimento, method post')
    })
}