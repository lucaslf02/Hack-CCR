const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }

  // static associate(models) {
  //   this.hasMany(models.Prontuario, { foreignKey: 'user_id', as: 'ProntuarioUser' });
  //   this.hasMany(models.Endereco, { foreignKey: 'user_id', as: 'enderecoUser' });
  //   this.hasMany(models.CNH, { foreignKey: 'user_id', as: 'numeroCnh' });
  // }
}

module.exports = User;