const db = require('../database')

module.exports.cadastrar = async (objeto) => {
    const sql = `INSERT INTO venda(codigo_venda) VALUE ('${objeto.codigoVenda}')`
    res = await db.query(sql)
    return res
}

module.exports.detalhar = async (obeto) => {
    const sql = `SELECT * FROM venda WHERE codigo_venda = '${obeto.codigoVenda}'`
    const [res] = await db.query(sql)
    return res
} 