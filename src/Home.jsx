import * as React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  // set state for cards array
  const [cards, setCards] = useState([]);

  // effects run everytime you render the app, so must use [] to only render it once
  // useEffect(() => {
  //   getCards();
  // }, []);

  // to request cards from API
  const getCards = async () => {
    // make request to API
    const res = await fetch("https://api.magicthegathering.io/v1/cards");
    // receive res and set to json
    const cards = await res.json();
    // set cards to json res
    setCards(cards.cards.slice(0, 10));

    console.log(cards.cards);
  };

  // handle click to display 10 cards
  const handleClick = async () => {
    const allCards = await getCards();
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click For Cards</button>
      <div className="card-results">
        {cards.map((card) => {
          return <Card name={card.name} url={card.imageUrl} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
