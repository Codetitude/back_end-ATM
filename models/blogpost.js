'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  BlogPost.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      link: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'BlogPost',
      tableName: 'blog_posts'
    }
  )
  return BlogPost
}
