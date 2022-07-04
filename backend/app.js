const express = require("express");
const app = express();
const path = require('path');

const cors = require("cors");

app.use(express.json());
app.use(cors());

const todo = require("./routes/todoRoute");

app.use("/api/v1", todo);

// for Hosting on heroku
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
// for Heroku

module.exports = app;
