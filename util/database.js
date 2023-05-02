const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '18092000', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
