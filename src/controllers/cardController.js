// get Card model from the models folder
const { response } = require("../../app");
const Card = require("../models/cardModel");

// get all cards from the database
exports.getAllCards = async (req, res) => {
  const allCards = await Card.find();

  try {
    res.status(200).json({
      status: "success",
      data: allCards,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// add a card to the database
exports.addCard = async (req, res) => {
  try {
    // call create method on Card and pass in req.body, returns a promise so we use async await
    const card = await Card.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        card,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
