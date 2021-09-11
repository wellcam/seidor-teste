const database = require('../models')
const moment = require('moment')

class UtilizacaoControlle{

    static async cadastrarUtilizacao(req, res){
        const utilizacao = req.body
        const data_inicio = moment(utilizacao.data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const data_terminio = moment(utilizacao.data_terminio, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const utilizacaoCorrigido = {...utilizacao, data_inicio, data_terminio}

        try{
            const utilizacaoCadastrada = await database.Utilizacoes.create(utilizacaoCorrigido)
            return res.status(200).json(utilizacaoCadastrada)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
    
    static async listarUtilizacoes(req, res){
        try{
            const listaUtilizacoes = await database.Utilizacoes.findAll()
            return res.status(200).json(listaUtilizacoes)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async removerUtilizacoes(req, res){
        const {id} = req.params
        try{
            const utilizacao = await database.Utilizacoes.findOne({where: {id: Number (id)}})
            if(utilizacao === null){
                return res.status(400).json({message:'Registro inexistente'})
            } else {
                await database.Utilizacoes.destroy({where: {id: Number (id)}})
                return res.status(200).json({message:'Sucesso, registro de utilização removido'})
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
}

module.exports = UtilizacaoControlle