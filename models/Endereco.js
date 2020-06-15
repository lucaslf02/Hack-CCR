const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: DataTypes.STRING,
      endereco: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complem: DataTypes.STRING,
      preexiste: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  // }
}

module.exports = Endereco;