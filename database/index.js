const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Endereco = require('../models/Endereco');
const Prontuario = require('../models/Prontuario');
const CNH = require("../models/CNH");

const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Prontuario.init(connection);
CNH.init(connection);

module.exports = connection;