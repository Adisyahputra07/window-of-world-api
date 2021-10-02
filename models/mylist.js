"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class myList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      myList.belongsTo(models.User, {
        as: "Users",
        foreignKey: {
          name: "userId",
        },
      });

      myList.belongsTo(models.Book, {
        as: "Books",
        foreignKey: {
          name: "bookId",
        },
      });
    }
  }
  myList.init(
    {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "myList",
    }
  );
  return myList;
};
