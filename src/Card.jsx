import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import img1 from "./assets/Magic_the_gathering-card_back.jpg";

const Card = ({ name, url, id }) => {
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
    </Grid>
  );
};

export default Card;
