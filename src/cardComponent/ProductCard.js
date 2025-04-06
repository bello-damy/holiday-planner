import "./ProductCard.css"

const Card = (props) => {
  
  return ( 
    <div className="card-container">
      <img src={props.image} alt="" className="card-img"></img>
      <br />
      <h3>{props.name}</h3>
      <hr width="280px"/>
      <div className="card-para-container">
        <p className="card-para">{props.description}</p>
      </div>
      <button className="card-btn">{props.button}</button>
    </div>
   );
}
 
export default Card;