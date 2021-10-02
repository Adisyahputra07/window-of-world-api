"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        as: "Roles",
        foreignKey: {
          name: "roleId",
        },
      });

      User.hasMany(models.myList, {
        as: "myList",
        foreignKey: {
          name: "userId",
        },
      });

      User.hasMany(models.Transactions, {
        as: "Transactions",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
