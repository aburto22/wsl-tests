const mongoose = require("mongoose");
const Bookthing = require("../models/Bookthing");

exports.getRequest = (req, res, next) => {
  console.log("getting request");
  res.send("welcome!");
};

exports.postRequest = (req, res, next) => {
  const name = req.body.name;
  console.log("posting request");
  Bookthing.findOne({ name: name }, (err, doc) => {
    if (err) return next(err);

    if (!doc) {
      const newBookthing = new Bookthing({
        name: name,
      });

      newBookthing.save((err, doc) => {
        return res.json(doc);
      });
    } else {
      return res.json(doc);
    }
  });
};
