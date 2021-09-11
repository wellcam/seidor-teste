module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Motoristas', [
			{
				nome: 'Fernando Almeida',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Amanda Santo',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Larissa Saldanha',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Roberto Pires',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Motoristas', null, {})
  }
}
