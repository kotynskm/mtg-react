import * as React from "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchSetCards from "./fetchSetCards";

const CardPageTwo = () => {
  const [cards, setCards] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const { code } = useParams();

  // find the id in cache, otherwise fetch the card using useQuery and fetch function
  const result = useQuery(["card", code], fetchSetCards);

  // display a loading message while waiting for response to come back from API req
  if (result.isLoading) {
    return <div className="loading-pane">Loading Card...</div>;
  }
  // after waiting for res to come back, we can then access card from the data object
  // if we try to access without waiting for res to load, we will get an error as data is undefined
  const card = result.data.cards;

  console.log(card);

  const lastIndex = currPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currCards = card.slice(firstIndex, lastIndex);
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
            totalCards={card.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrPage}
            currentPage={currPage}
          />
        </Grid>
      </div>
    </div>
  );
};

export default CardPageTwo;
