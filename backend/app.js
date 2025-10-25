const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

module.exports = app;
