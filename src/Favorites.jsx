import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FavoriteCard from "./FavoriteCard";
import Pagination from "./Pagination";

const Favorites = () => {
  const [cards, setCards] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  // fires a function when component is rendered - put [] as second argument so that it will only fire once when component first renders
  useEffect(() => {
    const getCards = async () => {
      // proxy in package.json will direct to our correct req route so we don't have to use the entire http rep, something like just "/api/cards"
      const res = await fetch("http://localhost:3000/");
      // parse json from the res object
      const resJSON = await res.json();
      console.log(resJSON.data);

      // check we got the data back ok, if so then update cards
      if (res.ok) {
        setCards(resJSON.data);
      }
    };

    getCards();
  }, []);

  const lastIndex = currPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currCards = cards.slice(firstIndex, lastIndex);
  return (
    <div className="container">
      <h1 className="fave-title">Favorite Cards</h1>
      <div className="card-results">
        {/* {cards &&
          cards.map((card) => {
            return <Card name={card.name} url={card.img} key={card._id} />;
          })} */}
        <Grid container>
          {cards &&
            cards.map((card) => {
              return (
                <FavoriteCard name={card.name} url={card.img} key={card._id} />
              );
            })}
          {/* <Pagination
            totalCards={cards.length}
            cardsPerPage={cardsPerPage}
            setCurrentPage={setCurrPage}
            currentPage={currPage}
          /> */}
        </Grid>
      </div>
    </div>
  );
};
export default Favorites;
