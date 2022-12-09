'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserPick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPick.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  UserPick.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'UserPick',
      tableName: 'user_picks'
    }
  )
  return UserPick
}
