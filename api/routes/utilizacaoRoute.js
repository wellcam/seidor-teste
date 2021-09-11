const {Router} = require('express')
const UtilizacaoController = require('../controllers/UtilizacaoController')

const router = Router()

router.post('/cadastrarUtilizacao', UtilizacaoController.cadastrarUtilizacao)

router.get('/listarUtilizacoes', UtilizacaoController.listarUtilizacoes)

router.delete('/removerUtilizacoes/:id', UtilizacaoController.removerUtilizacoes)

module.exports = router