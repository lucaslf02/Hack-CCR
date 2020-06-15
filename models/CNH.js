const { Model, DataTypes } = require('sequelize');

class CNH extends Model {
  static init(sequelize) {
    super.init({
      numero_cnh: DataTypes.INTEGER,
      validade_cnh: DataTypes.DATE,
      estado_emissão: DataTypes.DATE,
    }, {
      sequelize
    })
  }

  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  // }
}

module.exports = CNH;