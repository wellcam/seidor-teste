'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilizacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Utilizacoes.belongsTo(models.Motoristas,{foreignKey:'motoristas_id'})
      Utilizacoes.belongsTo(models.Automoveis,{foreignKey:'automoveis_id'})
    }
  };
  Utilizacoes.init({
    data_inicio: DataTypes.DATEONLY,
    data_terminio: DataTypes.DATEONLY,
    motivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Utilizacoes',
  });
  return Utilizacoes;
};