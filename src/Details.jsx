import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCard from "./fetchCard";

const Details = () => {
  // get ID from url parameters
  const { id } = useParams();

  // find the id in cache, otherwise fetch the card using useQuery and fetch function
  const result = useQuery(["card", id], fetchCard);

  // display a loading message while waiting for response to come back from API req
  if (result.isLoading) {
    return <div className="loading-pane">Loading Card...</div>;
  }
  // after waiting for res to come back, we can then access card from the data object
  // if we try to access without waiting for res to load, we will get an error as data is undefined
  const card = result.data.cards[0];

  return (
    <div>
      <h1>The id is {id}</h1>
      <h1>The name is {card?.name}</h1>
    </div>
  );
};

export default Details;
