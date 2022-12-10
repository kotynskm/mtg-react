import { Link } from "react-router-dom";

const Card = ({ name, id }) => {
  return (
    // wrap in a link so when click will go to card details page
    // <Link to={`details/${id}`} className="card">
    //   <div className="card-info">
    //     <h1>{name}</h1>
    //   </div>
    // </Link>
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default Card;
