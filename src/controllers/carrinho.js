const carrinhoModel = require('../models/carrinho')

module.exports = {
    async cadastrar(req, res) {
        try {
            const { id_venda, id_produto, quantidade } = req.body
            const carrinho = { id_venda, id_produto, quantidade }
            await carrinhoModel.cadastrar(carrinho)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async mostraIdCompra(req, res) {
        try {
            const { id } = req.params
            const resposta = await carrinhoModel.mostraIdsCompras(id)
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async detalhar(req, res) {
        try {
            const { id } = req.params
            const resposta = await carrinhoModel.detalhar(id)
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params
            const { id_produto, quantidade } = req.body
            const carrinho = { id_carrinho: parseInt(id), id_produto, quantidade }
            await carrinhoModel.atualizar(carrinho)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async excluir(req, res) {
        try {
            const { id } = req.params
            await carrinhoModel.excluir(id)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

} 