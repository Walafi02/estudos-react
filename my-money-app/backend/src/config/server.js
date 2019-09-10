const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')
const queryParser = require('express-query-int')

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server