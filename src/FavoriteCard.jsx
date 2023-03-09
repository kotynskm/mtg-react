import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import defaultImg from "./assets/Magic_the_gathering-card_back.jpg";

const FavoriteCard = ({ name, url, id, databaseID, handleDelete }) => {
  return (
    <Grid item md={6}>
      <Link to={`cards/${id}`} className="card">
        <div className="card-info">
          <div class="item">
            <h3>{name}</h3>
            <div className="image-container">
              <img src={url ? url : defaultImg}></img>
            </div>
          </div>
        </div>
      </Link>
      <button onClick={() => handleDelete(databaseID)} className="button-81">
        Delete
      </button>
    </Grid>
  );
};

export default FavoriteCard;
