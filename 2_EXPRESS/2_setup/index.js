// Importar Express

const express = require ('express')
const app = express()

// GUET recebe e POST envia - Verbos http

app.get('/', (requisicao, resposta) => {
    resposta.send('Estou utilizando o Express!')
})