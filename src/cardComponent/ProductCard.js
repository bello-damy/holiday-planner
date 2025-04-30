import "./ProductCard.css"
import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="card-container">
      <img src={props.image} alt="" className="card-img"></img>
      <br />
      <h3>{props.name}</h3>
      <hr width="280px" />
      <div className="card-para-container">
        <p className="card-para">{props.description}</p>
      </div>
      <Link to="/form" className="card-btn">
        <button className="card-btn">{props.button}</button>
      </Link>
    </div>
  );
}

export default Card;