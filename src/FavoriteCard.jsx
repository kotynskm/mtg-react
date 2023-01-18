import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import img1 from "./assets/Magic_the_gathering-card_back.jpg";

const FavoriteCard = ({ name, url, id, databaseID }) => {
  // trigger page reload - also update page by updating state in react
  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleClick = () => {
    fetch("http://localhost:3000/delete/" + databaseID, {
      method: "POST",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
    refreshPage();
  };
  return (
    <Grid item md={6}>
      <Link to={`cards/${id}`} className="card">
        <div className="card-info">
          <div class="item">
            <h3>{name}</h3>
            <div className="image-container">
              <img src={url ? url : img1}></img>
            </div>
          </div>
        </div>
      </Link>
      <button onClick={handleClick} className="button-81">
        Delete
      </button>
    </Grid>
  );
};

export default FavoriteCard;
