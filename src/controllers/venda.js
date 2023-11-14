const vendaModel = require('../models/venda')
const carrinhoModel = require('../models/carrinho')


module.exports = {
    async cadastrar(req, res) {
        try {
            const { codigoVenda } = req.body
            const venda = { codigoVenda }
            await vendaModel.cadastrar(venda)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async detalhar(req, res) {
        try {
            const { codigoVenda } = req.body
            const venda = { codigoVenda }
            const resposta = await vendaModel.detalhar(venda)
            return res.status(200).send({ objetos: resposta });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async finalizar(req, res) {
        try {
            const { id } = req.params
            const busca_carrinho = await carrinhoModel.mostraCompras(id)
            let compras = []
            busca_carrinho.map((item) => {
                let subTotal = item.preco * item.quantidade
                compras.push({ id_carrinho: item.id_carrinho, nome: item.nome, valor_unitario: item.preco, quantidade: item.quantidade, sub_total: subTotal })
            })
            return res.status(200).send({ sucesso: compras });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    },

    async atualizaTotal(req, res) {

    }
} 