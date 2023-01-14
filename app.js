// require express and middleware
const express = require("express");
const morgan = require("morgan");

// instantiate app
const app = express();

// middleware
app.use(morgan("dev"));

// routers

// export app
module.exports = app;
