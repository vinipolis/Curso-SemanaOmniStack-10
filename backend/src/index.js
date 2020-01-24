const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://vinicius:soulocao@cluster0-sofrp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)



// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de paramêtros:

// Querry Params: req.querry (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração, remoção)
// Body: req.body (Dados para criação ou alteração de um registro)

// app.use() algo que vai ser válido para todas as rotas da aplicação, 
// se fosse app.get() por exemplo seria apenas para rotas que começam com get