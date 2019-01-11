module.exports = function(sequelize, DataTypes) {
  var GameStats = sequelize.define("GameStats", {
    // The email cannot be null, and must be a proper email before creation
    wins: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return GameStats;
};
