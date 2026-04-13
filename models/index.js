const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  logging: false
});

const Owner = require("./Owner")(sequelize);
const Animal = require("./Animal")(sequelize);
const HealthRecord = require("./HealthRecord")(sequelize);

Owner.hasMany(Animal, { foreignKey: "ownerId", onDelete: "CASCADE" });
Animal.belongsTo(Owner, { foreignKey: "ownerId" });

Animal.hasMany(HealthRecord, { foreignKey: "animalId", onDelete: "CASCADE" });
HealthRecord.belongsTo(Animal, { foreignKey: "animalId" });

module.exports = {
  sequelize,
  Owner,
  Animal,
  HealthRecord
};