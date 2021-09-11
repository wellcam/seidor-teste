'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motoristas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Motoristas.hasOne(models.Utilizacoes,{foreignKey:'motoristas_id'})
    }
  };
  Motoristas.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motoristas',
  });
  return Motoristas;
};