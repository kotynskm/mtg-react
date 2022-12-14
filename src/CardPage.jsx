import * as React from "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";

const CardPage = () => {
  const [cards, setCards] = useState([]);

  // effects run everytime you render the app, so must use [] to only render it once
  useEffect(() => {
    getCards();
  }, []);

  // to request cards from API
  const getCards = async () => {
    // make request to API
    const res = await fetch("https://api.magicthegathering.io/v1/cards");
    // receive res and set to json
    const cards = await res.json();
    console.log(cards);
    // set cards to json res
    setCards(cards.cards.slice(0, 12));
  };

  return (
    <>
      <h1>This is the cards page</h1>
      <div className="container">
        <div className="card-results">
          <Grid container>
            {cards.map((card) => {
              return (
                <Card
                  name={card.name}
                  url={card.imageUrl}
                  text={card.text}
                  id={card.id}
                  key={card.id}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default CardPage;
