// get Card model from the models folder
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
