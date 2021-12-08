const express = require ('express')
const routes = express.Router()

let db = [
    { '1': { Nome: 'Usuario 1', CodigoAcesso: '001' } },
    { '2': { Nome: 'Usuario 2', CodigoAcesso: '002' } },
    { '3': { Nome: 'Usuario 3', CodigoAcesso: '003' } }
]

//BUSCAR DADOS
routes.get('/', (req, res) => {
    return res.json(db)
})

//INSERIR DADOS
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)
})



module.exports = routes