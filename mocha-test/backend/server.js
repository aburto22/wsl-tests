"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const generalRouter = require("./routes/routes");

const app = express();

// Enable CORS
app.use(cors());

// Send objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Use routes
app.use(generalRouter);

// Not found
app.use((req, res, next) => {
  res.status(404).type("text").send("Not found");
});

// Error handling
app.use((err, req, res, next) => {
  console.warn(err);
});

// Start listening
app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port " + process.env.PORT);
});

module.exports = app;
