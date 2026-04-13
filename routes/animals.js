const express = require("express");
const router = express.Router();
const { Animal } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const animals = await Animal.findAll();
    res.json(animals);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ error: "Animal not found" });
    res.json(animal);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ error: "Animal not found" });

    await animal.update(req.body);
    res.json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ error: "Animal not found" });

    await animal.destroy();
    res.json({ message: "Animal deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;