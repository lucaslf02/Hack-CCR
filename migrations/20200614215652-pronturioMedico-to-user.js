'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProntuarioUser', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true, 
        allowNull: false,
      }, 
      idade: {
        type: Sequelize.MUMBER,
        allowNull: true,
      },
      peso: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      }, 
      altura: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preexiste: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      grupo_sanguineo: {
        type: Sequelize.STRING,
        allowNull: true,
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
    
    
  }
};
