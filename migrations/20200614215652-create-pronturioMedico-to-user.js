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
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:true,
        // references: { model: 'users', key: 'id' },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
      }, 
      idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      peso: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
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
