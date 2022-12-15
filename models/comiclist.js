'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ComicList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComicList.hasMany(models.UserPick, {
        foreignKey: 'userpick_id',
        as: 'picks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  ComicList.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      link: DataTypes.STRING,
      publisher: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'ComicList',
      tableName: 'comic_lists'
    }
  )
  return ComicList
}
