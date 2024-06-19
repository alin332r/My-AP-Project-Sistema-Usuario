require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

// Configure as variáveis de ambiente ou substitua pelos valores diretamente
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false // Defina como true se desejar ver os logs das consultas SQL no console
});

module.exports = sequelize;

