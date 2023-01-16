// require express and middleware
const express = require("express");
const morgan = require("morgan");

// import routers
const cardRouter = require("./src/routes/cardRoutes");

// instantiate app
const app = express();

// middleware
app.use(morgan("dev"));

// handle route requests
app.use("/", cardRouter);

// export app
module.exports = app;
