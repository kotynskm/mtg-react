import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCard from "./fetchCard";

const Details = () => {
  // get ID from url parameters
  const { id } = useParams();

  // fetch the card using useQuery and fetch function
  const result = useQuery(["card", id], fetchCard);
  console.log(result);
  // get the card from the data object
  const card = result.data.cards[0];
  console.log(card);

  return (
    <div>
      <h1>The id is {id}</h1>
      <h1>The name is {card.name}</h1>
    </div>
  );
};

export default Details;
