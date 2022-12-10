import { Link } from "react-router-dom";

const Card = ({ name, url, id }) => {
  // if no url found, show mtg card back as image
  if (!url) {
    url = "./assets/Magic_the_gathering-card_back.jpg";
  }
  return (
    // wrap in a link so when clicked will go to card details page using ID
    <Link to={`cards/${id}`} className="card">
      <div className="card-info">
        <h1>{name}</h1>
      </div>
      <div className="image-container">
        <img src={url}></img>
      </div>
    </Link>
  );
};

export default Card;
