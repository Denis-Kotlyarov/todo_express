const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todos_express', 'root', null, {
    host: 'MySQL-5.7',
    dialect: 'mysql'
})

module.exports = sequelize;