'use strict';
module.exports = (sequelize, DataTypes) => {
  var likebooks = sequelize.define('likebooks', {
    author: DataTypes.STRING,
    bookid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    like: DataTypes.INTEGER
  }, {});
  likebooks.associate = function(models) {
    // associations can be defined here
  };
  return likebooks;
};