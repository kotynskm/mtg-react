import * as React from "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import Pagination from "./Pagination";

const CardPage = () => {
  const [cards, setCards] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  // effects run everytime you render the app, so must use [] to only render it once
  useEffect(() => {
    getCards();
  }, []);

  // to request cards from API
  const getCards = async () => {
    // make request to API
    const res = await fetch("https://api.magicthegathering.io/v1/cards");
    console.log(res);

    // receive res and set to json
    const cards = await res.json();
    console.log(cards);

    // set cards to json res
    setCards(cards.cards);
  };

  const lastIndex = currPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currCards = cards.slice(firstIndex, lastIndex);
  console.log(currCards);

  return (
    <div className="container">
      <div className="card-results">
        <Grid container>
          {currCards.map((card) => {
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
          <Pagination
            totalCards={cards.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrPage}
            currentPage={currPage}
          />
        </Grid>
      </div>
    </div>
  );
};

export default CardPage;
