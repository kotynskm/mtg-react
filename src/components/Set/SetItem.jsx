import { Link } from "react-router-dom";

const SetItem = ({ code, name, type }) => {
  return (
    <Link to={`sets/${code}`} className="setitem">
      <div className="card-info">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default SetItem;
