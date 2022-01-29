require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const connect = require("./config/db");
connect();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/swags", require("./components/routes/swags"));
app.use("/users", require("./components/routes/users"));
app.use("/category", require("./components/routes/category"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
