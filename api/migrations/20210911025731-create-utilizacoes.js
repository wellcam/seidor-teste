'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Utilizacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      data_terminio: {
        type: Sequelize.DATEONLY
      },
      motivo: {
        type: Sequelize.STRING
      },
      motoristas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Motoristas', key: 'id'}
      },
      automoveis_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Automoveis', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Utilizacoes');
  }
};