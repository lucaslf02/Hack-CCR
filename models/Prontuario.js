const { Model, DataTypes } = require('sequelize');

class Prontuario extends Model {
  static init(sequelize) {
    super.init({
      idade: DataTypes.INTEGER,
      altura: DataTypes.DECIMAL,
      sexo: DataTypes.STRING,
      preexiste: DataTypes.STRING,
      grupo_sanguineo: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  // }
}

module.exports = Prontuario;