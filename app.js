const express = require("express");
const path = require("path");
const cors = require("cors");

const main = require("./config/mongo");
const Router = require("./router/router");

const app = express();

main().catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", Router);

app.listen(process.env.PORT || 3000, () => console.log("server running"));
