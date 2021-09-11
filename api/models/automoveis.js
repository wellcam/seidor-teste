'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Automoveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Automoveis.hasOne(models.Utilizacoes,{foreignKey:'automoveis_id'})
    }
  };
  Automoveis.init({
    placa: DataTypes.STRING,
    cor: DataTypes.STRING,
    marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Automoveis',
  });
  return Automoveis;
};