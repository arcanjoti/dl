const routes = require('express').Router()

const pessoaController = require('./controllers/pessoa')
const produtoController = require('./controllers/produto')
const vendaController = require('./controllers/venda')
const carrinhoController = require('./controllers/carrinho')
const mensagemController = require('./controllers/mensagem')

routes.get('/', (req, res) => {
    return res.json({ mensagem: 'Hello World' })
})


routes.post('/pessoa-cadastrar', pessoaController.cadastrar)

routes.get('/produto-listar', produtoController.listar)
routes.get('/produto-detalhar/:id', produtoController.detalhar)

routes.post('/venda-cadastrar', vendaController.cadastrar)
routes.post('/venda-detalhar', vendaController.detalhar)
routes.post('/venda-finalizar/:id', vendaController.finalizar)


routes.get('/carrinho-mostra-id-compras/:id', carrinhoController.mostraIdCompra)

routes.post('/carrinho-cadastrar', carrinhoController.cadastrar)
routes.get('/carrinho-detalhar/:id', carrinhoController.detalhar)
routes.put('/carrinho-atualizar/:id', carrinhoController.atualizar)
routes.delete('/carrinho-excluir/:id', carrinhoController.excluir)

routes.post('/mensagem-cadastrar', mensagemController.cadastrar)
routes.get('/mensagem-detalhar/:id', mensagemController.detalhar)
routes.put('/mensagem-atualizar/:id', mensagemController.atualizar)




// routes.get('/pedido-listar', pedidoController.listar)
// routes.get('/pedido-detalhar/:id', pedidoController.detalhar) 


module.exports = routes