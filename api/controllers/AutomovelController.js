const database = require('../models')
const Sequelize = require('sequelize')

class AutomovelControlle{

    static async listarAutomoveis(req, res){
        try{
            const listaAutomoveis = await database.Automoveis.findAll()
            return res.status(200).json(listaAutomoveis)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async listarAutomoveisPorId(req, res){
        const {id} = req.params
        try{
            const automovel = await database.Automoveis.findOne({where: {id: Number (id)}})
            if(automovel === null){
                return res.status(400).json({message:'Registro inexistente'})
             } else {
                return res.status(200).json(automovel)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async cadastrarAutomovel(req, res){
        const automovel = req.body
        try{
            const automovelCadastrado = await database.Automoveis.create(automovel)
            return res.status(200).json(automovelCadastrado)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async atualizarAutomovel(req, res){
        const {id} = req.params
        const valoresAtualizar = req.body
        try{
            await database.Automoveis.update(valoresAtualizar, {where: {id: Number (id)}})
            const automovelAtualizado = await database.Automoveis.findOne({where: {id: Number (id)}})
            if(automovelAtualizado === null){
                return res.status(400).json({message:'Registro não atualizado, inexistente'})
            } else {
                return res.status(200).json(automovelAtualizado)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async listarAutomoveisPorCorMarca(req, res){
        const {cor} = req.params
        const {marca} = req.params
        const Op = Sequelize.Op

        try{
            const listaAutomoveis = await database.Automoveis.findAll( {where: {marca: { [Op.like]: '%'+(marca)+'%'}, cor: { [Op.like]: '%'+(cor)+'%'}}})
            if(!listaAutomoveis === null || !listaAutomoveis.length){
                return res.status(400).json({message:'Nenhum resultado encontrado'})
            } else {
                return res.status(200).json(listaAutomoveis)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async removerAutomovel(req, res){
        const {id} = req.params
        try{
            const automovel = await database.Automoveis.findOne({where: {id: Number (id)}})
            if(automovel === null){
                return res.status(400).json({message:'Registro inexistente'})
             } else {
                 await database.Automoveis.destroy({where: {id: Number (id)}})
                 return res.status(200).json({message:'Sucesso, registro de automovel removido'})
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
}

module.exports = AutomovelControlle