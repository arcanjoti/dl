const db = require('../database')

module.exports.listar = async () => {
    const sql = `SELECT produto.id_produto, produto.nome, produto.descricao_produto, produto.preco, categoria_produto.descricao_categoria_produto FROM produto INNER JOIN categoria_produto ON produto.id_categoria_produto = categoria_produto.id_categoria_produto`
    const [res] = await db.query(sql)
    return res
}

module.exports.detalhar = async (id) => {
    const sql = `SELECT produto.id_produto, produto.nome, produto.descricao_produto, produto.preco, categoria_produto.descricao_categoria_produto FROM produto INNER JOIN categoria_produto ON produto.id_categoria_produto = categoria_produto.id_categoria_produto WHERE id_produto = ${id}`
    const [res] = await db.query(sql)
    return res
} 