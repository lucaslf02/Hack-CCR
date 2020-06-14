'use strict';

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
  password : {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  created_at: {
    type: Sequelize.DATEs,
    allowNull: false,
  }, 
  update_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
}); 
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users');
  }
};
