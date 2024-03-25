const express = require("express");
const app = express();
const errorMiddleware = require("../backend/middleware/error");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route  Imports
const order = require("./routes/orderRoute");
const user = require("./routes/userRoute");

app.use("/api", order);
app.use("/api/v1", user);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
