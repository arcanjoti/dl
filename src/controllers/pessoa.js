const pessoaModel = require('../models/pessoa')

module.exports = {
    async cadastrar(req, res) {
        try {

            const { nome, telefone } = req.body
            const pessoa = { nome, telefone }
            await pessoaModel.cadastrar(pessoa)
            return res.status(200).send({ sucesso: 'Sucesso' });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ Erro: 'Erro!' });
        }
    }
    
} 