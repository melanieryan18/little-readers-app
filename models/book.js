module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Book;
};
