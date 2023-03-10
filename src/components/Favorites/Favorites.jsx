import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FavoriteCard from "./FavoriteCard";
import Pagination from "../Pagination/Pagination";

const Favorites = () => {
  const [cards, setCards] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  // fires a function when component is rendered - put [] as second argument so that it will only fire once when component first renders
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
  useEffect(() => {
    getCards();
  }, []);

  const handleDelete = (databaseID) => {
    fetch("http://localhost:3000/delete/" + databaseID, {
      method: "POST",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
    getCards();
  };

  const lastIndex = currPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currCards = cards.slice(firstIndex, lastIndex);

  return (
    <div className="container">
      <h1 className="fave-title">Favorite Cards</h1>
      <div className="card-results" data-testid="favorite-cards">
        {/* {cards &&
          cards.map((card) => {
            return <Card name={card.name} url={card.img} key={card._id} />;
          })} */}
        <Grid container>
          {currCards &&
            currCards.map((card) => {
              return (
                <FavoriteCard
                  name={card.name}
                  url={card.imageUrl}
                  id={card.id}
                  databaseID={card._id}
                  key={card._id}
                  handleDelete={handleDelete}
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
export default Favorites;
