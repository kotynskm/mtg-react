import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "./assets/Magic_the_gathering-card_back.jpg";

const FavoriteCard = ({ name, url, id }) => {
  return (
    <Grid item md={6}>
      <Link to={`cards/${id}`} className="card">
        <div className="card-info">
          <div class="item">
            <h3>{name}</h3>
            <h2>{id}</h2>
            <div className="image-container">
              <img src={url ? url : img1}></img>
            </div>
          </div>
        </div>
      </Link>
      <button className="button-81">Delete</button>
    </Grid>
  );
};

export default FavoriteCard;
