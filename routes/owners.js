const express = require("express");
const router = express.Router();
const { Owner } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const owners = await Owner.findAll();
    res.json(owners);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (!owner) return res.status(404).json({ error: "Owner not found" });
    res.json(owner);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (!owner) return res.status(404).json({ error: "Owner not found" });

    await owner.update(req.body);
    res.json(owner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (!owner) return res.status(404).json({ error: "Owner not found" });

    await owner.destroy();
    res.json({ message: "Owner deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;