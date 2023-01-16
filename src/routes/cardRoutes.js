// import express, router, and controller
const express = require("express");
const router = express.Router();
// get all functions from the controller folder
const cardController = require("../controllers/cardController");

// routes
router.route("/").get(cardController.getAllCards);

module.exports = router;
