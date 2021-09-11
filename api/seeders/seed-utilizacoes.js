module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Utilizacoes', [
			{
				data_inicio: new Date(03-10-2021),
				data_terminio: new Date(04-11-2021),
				motoristas_id: 1,
				automoveis_id: 1,
				motivo:'Motorista de aplicativo',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Utilizacoes', null, {})
  }
}
