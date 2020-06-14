'use strict';

const sequelize = require("sequelize");
const { SELECT } = require("sequelize/types/lib/query-types");

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.createTable('user', {
  id: {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true, 
    allowNull: false,
  }, 
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  created_at: {
    type: Sequelize.DATA,
    allowNull: false,
  }, 
  update_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
}); 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
