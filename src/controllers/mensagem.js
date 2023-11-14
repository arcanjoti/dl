const mensagemModel = require('../models/mensagem')

module.exports = {
    async cadastrar(req, res) {
        try {
            const { idVenda, descricao } = req.body
            const mensagem = { idVenda, descricao }
            await mensagemModel.cadastrar(mensagem)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async detalhar(req, res) {
        try {
            const { id } = req.params
            const resposta = await mensagemModel.detalhar(id)
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params
            const { descricao } = req.body
            const resposta = await mensagemModel.detalhar(id)
            const idMensagem = resposta[0].id_mensagem
            const msg = resposta[0].mensagem + descricao

            const mensagem = { idMensagem, mensagem: msg }
            await mensagemModel.atualizar(mensagem)

            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },
} 