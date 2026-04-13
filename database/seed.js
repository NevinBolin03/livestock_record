const { Owner, Animal, HealthRecord, sequelize } = require("../models");

async function seedDatabase() {
  try {
    await sequelize.sync();

    const owner1 = await Owner.create({
      name: "Jake Miller",
      phone: "417-555-1010",
      farmName: "Miller Family Farm"
    });

    const owner2 = await Owner.create({
      name: "Sarah Thompson",
      phone: "417-555-2020",
      farmName: "Thompson Livestock"
    });

    const animal1 = await Animal.create({
      tagNumber: "A100",
      name: "Bessie",
      species: "Cow",
      breed: "Angus",
      birthDate: "2022-03-14",
      weight: 1250.5,
      ownerId: owner1.id
    });

    const animal2 = await Animal.create({
      tagNumber: "A101",
      name: "Duke",
      species: "Bull",
      breed: "Hereford",
      birthDate: "2021-05-22",
      weight: 1800.0,
      ownerId: owner1.id
    });

    const animal3 = await Animal.create({
      tagNumber: "A102",
      name: "Daisy",
      species: "Goat",
      breed: "Boer",
      birthDate: "2023-01-10",
      weight: 140.2,
      ownerId: owner2.id
    });

    await HealthRecord.create({
      recordDate: "2026-01-15",
      treatment: "Vaccination",
      medication: "Bovi-Shield Gold",
      notes: "Annual vaccine given",
      animalId: animal1.id
    });

    await HealthRecord.create({
      recordDate: "2026-02-10",
      treatment: "Deworming",
      medication: "Safe-Guard",
      notes: "Routine treatment",
      animalId: animal2.id
    });

    await HealthRecord.create({
      recordDate: "2026-03-05",
      treatment: "Checkup",
      medication: "None",
      notes: "Healthy condition",
      animalId: animal3.id
    });

    console.log("Database seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();