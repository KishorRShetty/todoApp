const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const todo = require("./routes/todoRoute");

app.use("/api/v1", todo);

module.exports = app;
