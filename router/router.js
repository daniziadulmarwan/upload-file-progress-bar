const upload = require("../config/multer");
const Image = require("../models/image");

const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("index");
});

Router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (req.file) {
      await Image.create({
        imageUrl: `uploads/${req.file.filename}`,
      });
    }

    res.status(200).jsonp({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
