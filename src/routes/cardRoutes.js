// import express, router, and controller
const express = require("express");
const router = express.Router();
// get all functions from the controller folder
const cardController = require("../controllers/cardController");

// routes
router.route("/").get(cardController.getAllCards);
router.route("/add").post(cardController.addCard);
router.route("/delete/:id").post(cardController.deleteCard);

module.exports = router;
