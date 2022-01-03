const mongoose = require("mongoose");

async function main() {
  await mongoose
    .connect("mongodb://localhost/progress")
    .then(() => console.log("database connected"));
}

module.exports = main;
