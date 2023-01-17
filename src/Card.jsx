import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import img1 from "./assets/Magic_the_gathering-card_back.jpg";

const Card = ({ name, url, id }) => {
  const handleClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        img: url,
      }),
    };

    const res = await fetch("http://localhost:3000/add", requestOptions);
    const jsonRes = await res.json();
    console.log(jsonRes);
  };

  return (
    <Grid item md={4}>
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
        Add to Favorites
      </button>
    </Grid>
  );
};

export default Card;
