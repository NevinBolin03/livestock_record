require("dotenv").config();
const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const ownerRoutes = require("./routes/owners");
const animalRoutes = require("./routes/animals");
const healthRecordRoutes = require("./routes/healthrecords");

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Livestock Record API is running" });
});

app.use("/api/owners", ownerRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/healthrecords", healthRecordRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;