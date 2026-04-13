const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Owner", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    farmName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};