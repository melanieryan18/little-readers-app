module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    // The email cannot be null, and must be a proper email before creation
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });

  return Book;
};