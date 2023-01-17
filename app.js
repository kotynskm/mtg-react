// require express and middleware
const express = require("express");
const morgan = require("morgan");

// import routers
const cardRouter = require("./src/routes/cardRoutes");

// instantiate app
const app = express();

// middleware
app.use(morgan("dev"));
// to allow cross-origin requests (with fetch req to node routes) - we can do this OR add "proxy" with the localhost address to package.json, and change the route req to the route only, w/o http://localhost
let cors = require("cors");
app.use(cors());
// body parser to parse data from the body of req
app.use(express.json());

// handle route requests
app.use("/", cardRouter);

// export app
module.exports = app;
