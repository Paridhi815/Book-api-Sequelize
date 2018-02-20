'use strict';
module.exports = (sequelize, DataTypes) => {
  var likes = sequelize.define('likes', {
    bookid: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  likes.associate = function(models) {
    // associations can be defined here
  };
  return likes;
};