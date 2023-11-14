const db = require('../database')

module.exports.cadastrar = async (objeto) => {
    const sql = `INSERT INTO pessoa(nome, telefone) VALUES ('${objeto.nome}', ${objeto.telefone})`
    res = await db.query(sql)
    return res
}
