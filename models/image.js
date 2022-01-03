const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, "Gambar harus diisi"],
  },
});

module.exports = mongoose.model("Image", imageSchema);
