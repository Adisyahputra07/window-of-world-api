"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.myList, {
        as: "myList",
        foreignKey: {
          name: "bookId",
        },
      });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      publicationDate: DataTypes.DATE,
      pages: DataTypes.INTEGER,
      author: DataTypes.STRING,
      isbn: DataTypes.STRING,
      about: DataTypes.TEXT,
      bookFile: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
