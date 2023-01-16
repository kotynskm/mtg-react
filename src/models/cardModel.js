const mongoose = require("mongoose");
const { Schema } = mongoose;

// create schema for a card
const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  text: {
    type: String,
  },
});

// create card Model
const Card = mongoose.model("Card", cardSchema);
// export Model for use in app
module.exports = Card;
