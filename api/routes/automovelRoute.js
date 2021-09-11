const {Router} = require('express')
const AutomovelController = require('../controllers/AutomovelController')

const router = Router()

router.post('/cadastrarAutomovel', AutomovelController.cadastrarAutomovel)

router.get('/listarAutomoveis', AutomovelController.listarAutomoveis)

router.get('/listarAutomoveisPorId/:id', AutomovelController.listarAutomoveisPorId)

router.get('/listarAutomoveisPorCorMarca/:cor&:marca', AutomovelController.listarAutomoveisPorCorMarca)

router.put('/atualizarAutomovel/:id', AutomovelController.atualizarAutomovel)

router.delete('/removerAutomovel/:id', AutomovelController.removerAutomovel)

module.exports = router