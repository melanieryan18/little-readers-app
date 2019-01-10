module.exports = function (sequelize, DataTypes) {
    var BooksRead = sequelize.define("BooksRead", {
      // The email cannot be null, and must be a proper email before creation
      read: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      },
      bookName: {
        type: DataTypes.VARCHAR,
        allowNull: false
      }

    });
  
    return BooksRead;
  };
  
      // GameStats.associate = function(models) {
      //   models.GameStats.hasMany(models.Example);
      // };