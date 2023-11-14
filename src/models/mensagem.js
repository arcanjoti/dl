const db = require('../database')

module.exports.cadastrar = async (objeto) => {
    const sql = `INSERT INTO mensagem(id_venda, mensagem) VALUES ('${objeto.idVenda}', '${objeto.descricao}')`
    res = await db.query(sql)
    return res
}

module.exports.detalhar = async (id) => {
    const sql = `SELECT * FROM mensagem WHERE id_venda = ${id}`
    const [res] = await db.query(sql)
    return res
}

module.exports.atualizar = async (objeto) => {
    const sql = `UPDATE mensagem SET mensagem = '${objeto.mensagem}' WHERE id_mensagem = ${objeto.idMensagem}`
    const [res] = await db.query(sql)
    return res
}

