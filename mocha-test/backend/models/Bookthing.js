const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookthingSchema = new Schema({
  name: String,
});

const Bookthing = mongoose.model("Bookthing", bookthingSchema);

module.exports = Bookthing;
