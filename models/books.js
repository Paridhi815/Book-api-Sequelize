'use strict';
module.exports = (sequelize, DataTypes) => {
  var books = sequelize.define('books', {
    author: DataTypes.STRING,
    bookid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {});
  books.associate = function(models) {
    // associations can be defined here
  };
  return books;
};