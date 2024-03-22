const express = require("express");
const app = express();
const errorMiddleware = require("../backend/middleware/error");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route  Imports
const order = require("./routes/orderRoute");

app.use("/api", order);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
