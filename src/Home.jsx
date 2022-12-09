import * as React from "react";

const getCards = async () => {
  // make request to API
  const res = await fetch("https://api.magicthegathering.io/v1/cards");
  // receive res and set to json
  const body = await res.json();
  console.log(body);
};

const Home = () => {
  const handleClick = async () => {
    const allCards = await getCards();
    return allCards;
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click For Cards</button>
    </div>
  );
};

export default Home;
