const {Router} = require('express')
const MotoristaController = require('../controllers/MotoristaController')

const router = Router()

router.post('/cadastrarMotorista', MotoristaController.cadastrarMotorista)

router.get('/listarMotoristas', MotoristaController.listarMotoristas)

router.get('/listarMotoristasPorId/:id', MotoristaController.listarMotoristasPorId)

router.get('/listarMotoristasPorNome/:nome', MotoristaController.listarMotoristasPorNome)

router.put('/atualizarMotorista/:id', MotoristaController.atualizarMotorista)

router.delete('/removerMotorista/:id', MotoristaController.removerMotorista)

module.exports = router