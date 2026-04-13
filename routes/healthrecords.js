const express = require("express");
const router = express.Router();
const { HealthRecord } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const records = await HealthRecord.findAll();
    res.json(records);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const record = await HealthRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Health record not found" });
    res.json(record);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const record = await HealthRecord.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const record = await HealthRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Health record not found" });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const record = await HealthRecord.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "Health record not found" });

    await record.destroy();
    res.json({ message: "Health record deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;