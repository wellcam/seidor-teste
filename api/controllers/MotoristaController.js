const database = require('../models')
const Sequelize = require('sequelize')

class MotoristaControlle{

    static async cadastrarMotorista(req, res){
        const motorista = req.body
        try{
            const motoristaCadastrado = await database.Motoristas.create(motorista)
            return res.status(200).json(motoristaCadastrado)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
    
    static async listarMotoristas(req, res){
        try{
            const listaMotoristas = await database.Motoristas.findAll()
            return res.status(200).json(listaMotoristas)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async listarMotoristasPorId(req, res){
        const {id} = req.params
        try{
            const motorista = await database.Motoristas.findOne({where: {id: Number (id)}})
            if(motorista === null){
                return res.status(400).json({message:'Registro inexistente'})
             } else {
                return res.status(200).json(motorista)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async atualizarMotorista(req, res){
        const {id} = req.params
        const valoresAtualizar = req.body
        try{
            await database.Motoristas.update(valoresAtualizar, {where: {id: Number (id)}})
            const motoristaAtualizado = await database.Motoristas.findOne({where: {id: Number (id)}})
            if(motoristaAtualizado === null){
                return res.status(400).json({message:'Registro não atualizado, inexistente'})
            } else {
                return res.status(200).json(motoristaAtualizado)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async listarMotoristasPorNome(req, res){
        const {nome} = req.params
        const Op = Sequelize.Op

        try{

            const listaMotoristas = await database.Motoristas.findAll(
                {where: {nome: { [Op.like]: '%'+(nome)+'%'}}})
            if(listaMotoristas === null || !listaMotoristas.length){
                return res.status(400).json({message:'Nenhum resultado encontrado'})
            } else {
                return res.status(200).json(listaMotoristas)
            }
            
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async removerMotorista(req, res){
        const {id} = req.params
        try{
            const motorista = await database.Motoristas.findOne({where: {id: Number (id)}})
            if(motorista === null){
                return res.status(400).json({message:'Registro inexistente'})
            } else {
                await database.Motoristas.destroy({where: {id: Number (id)}})
                return res.status(200).json({message:'Sucesso, registro de motorista removido'})
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
}

module.exports = MotoristaControlle