const produtoModel = require('../models/produto')

module.exports = {

    async listar(req, res) {
        try {

            const resposta = await produtoModel.listar()
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async detalhar(req, res) {
        try {
            const resposta = await produtoModel.detalhar(req.params.id)
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

} 