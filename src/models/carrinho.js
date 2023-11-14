const db = require('../database')

module.exports.cadastrar = async (objeto) => {
    const sql = `INSERT INTO carrinho (id_venda, id_produto, quantidade) VALUES ('${objeto.id_venda}', '${objeto.id_produto}', '${objeto.quantidade}')`
    res = await db.query(sql)
    return res
}

// module.exports.detalhar = async (id) => {
//     const sql = `SELECT  SELECT * FROM carrinho WHERE id_venda =${id}`
//     const [res] = await db.query(sql)
//     return res
// }


module.exports.detalhar = async (id) => {
    const sql = `SELECT carrinho.id_carrinho, produto.nome, produto.descricao_produto, produto.preco, carrinho.quantidade FROM carrinho INNER JOIN venda ON carrinho.id_venda = venda.id_venda INNER JOIN produto ON carrinho.id_produto = produto.id_produto WHERE carrinho.id_venda =${id}`
    const [res] = await db.query(sql)
    return res
}



// module.exports.detalhar = async (id) => {
//     const sql = `SELECT carrinho.id_carrinho, produto.nome, produto.descricao_produto, produto.preco FROM carrinho INNER JOIN venda ON carrinho.id_venda = venda.id_venda INNER JOIN produto ON carrinho.id_produto = produto.id_produto WHERE carrinho.id_venda = ${id}`
//     const [res] = await db.query(sql)
//     return res
// }


module.exports.mostraCompras = async (id) => {
    const sql = `SELECT carrinho.id_carrinho, venda.id_venda, produto.id_produto, produto.nome, produto.descricao_produto, carrinho.quantidade, produto.preco, categoria_produto.descricao_categoria_produto FROM carrinho INNER JOIN venda ON carrinho.id_venda = venda.id_venda   INNER JOIN produto ON carrinho.id_produto = produto.id_produto    INNER JOIN categoria_produto ON produto.id_categoria_produto = categoria_produto.id_categoria_produto    WHERE carrinho.id_venda = ${id}`
    const [res] = await db.query(sql)
    return res
}

module.exports.atualizar = async (objeto) => {
    const sql = `UPDATE carrinho SET id_produto = ${objeto.id_produto}, quantidade = ${objeto.quantidade} WHERE id_carrinho = ${objeto.id_carrinho}`
    const [res] = await db.query(sql)
    return res
}

module.exports.excluir = async (id) => {
    const sql = `DELETE FROM carrinho WHERE id_carrinho = ${id}`
    const [res] = await db.query(sql)
    return res
}
