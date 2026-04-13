const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("HealthRecord", {
    recordDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    treatment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};