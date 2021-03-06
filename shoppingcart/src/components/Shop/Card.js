import React from "react";
import "./Shop.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card-style">
      <img src={props.src} alt={props.name} />
      <div className="name-price-style">
        <div>
          <p>{props.name}</p>
          <p>{props.price} $</p>
        </div>
        <form onSubmit={(e) => props.onSubmit(e)}>
          <input
            type="number"
            min="1"
            id={props.productName}
            name={props.productName}
          />
          <Button type="submit" color="secondary" variant="contained">
            Add To Cart
          </Button>
        </form>

        <Link to={`/shop/${props.productName}`}>
          <Button color="primary" variant="contained">
            Buy Car
          </Button>
        </Link>
      </div>
    </div>
  );
}
