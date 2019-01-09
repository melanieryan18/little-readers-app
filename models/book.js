module.exports = function (sequelize, DataTypes) {
  var BooksRead = sequelize.define("BooksRead", {
    // The email cannot be null, and must be a proper email before creation
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return BooksRead;
};