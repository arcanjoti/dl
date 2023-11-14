const express = require('express')

const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

const db = require('./database')

const routes = require('./routes')


const porta = 8080

app.use(cors())
//middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use(routes)

db.query("SELECT 1")
    .then(() => {
        console.log('A conexão com o banco de dados foi bem sucedida')
        app.listen(porta,
            () => console.log(`Aplicação executando na porta ${porta}`))
    })
    .catch(err => console.log('A conexão com o banco de dados falhou. \n' + err))
