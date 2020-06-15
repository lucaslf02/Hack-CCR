'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('numeroCnh', {
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
      numero_cnh: {
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      validade_cnh:{
        type:Sequelize.DATE,
        allowNull:true
      },
      estado_emissão:{
        type:Sequelize.DATE,
        allowNull:true
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
