const bodyParser = require('body-parser')
const automovel = require('./automovelRoute')
const motorista = require('./motoristaRoute')
const utilizacao = require('./utilizacaoRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(automovel, motorista, utilizacao)
}