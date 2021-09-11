module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Automoveis', [
			{
				placa: 'SP02A18',
				cor: 'Vermelho',
				marca: 'Fiat',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				placa: 'RJ02A18',
				cor: 'Preto',
				marca: 'Chevrolet',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				placa: 'MG02A18',
				cor: 'Branco',
				marca: 'Hyundai',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				placa: 'BA02A18',
				cor: 'Vermelho',
				marca: 'Hyundai',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Automoveis', null, {})
  }
}
