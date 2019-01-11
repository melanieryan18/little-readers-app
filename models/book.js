module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    // The email cannot be null, and must be a proper email before creation
    bookName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Book.associate = function(model) {
    Book.belongsTo(model.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Book;
};
