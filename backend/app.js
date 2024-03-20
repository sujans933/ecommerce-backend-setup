const express = require("express");
const app = express();
const errorMiddleware = require("../backend/middleware/error");

app.use(express.json());

// Route  Imports
const order = require("./routes/orderRoute");

app.use("/api/v1", order);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
