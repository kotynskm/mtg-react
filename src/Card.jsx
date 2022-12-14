import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Card = ({ name, url, id }) => {
  // if no url found, show mtg card back as image
  if (!url) {
    url = "./assets/Magic_the_gathering-card_back.jpg";
  }
  return (
    <Grid item md={4}>
      <Link to={`cards/${id}`} className="card">
        <div className="card-info">
          <div class="item">
            <h1>{name}</h1>
            <div className="image-container">
              <img src={url}></img>
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default Card;
