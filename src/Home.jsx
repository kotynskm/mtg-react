import * as React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  // set state for cards array
  const [cards, setCards] = useState([]);

  // effects run everytime you render the app, so must use [] to only render it once
  // useEffect(() => {
  //   getCards();
  // }, []);

  return (
    <div className="container">
      <h1>Welcome to MTG React App!</h1>
    </div>
  );
};

export default Home;
