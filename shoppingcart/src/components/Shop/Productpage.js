import React, { useState, useEffect } from "react";
import carData from "./carData";
import Button from "@material-ui/core/Button";

import "./Shop.css";

function Productpage({ match }, props) {
  const [car, setCar] = useState({});
  useEffect(() => {
    let filtered = carData.filter(
      (car) => car.productName === match.params.productName
    );
    setCar(filtered[0]);
  }, [match]);

  return (
    <div className="product-page">
      <h1>{car.name}</h1>
      <img src={car.source} alt={car.name} />
      <p>{car.price}</p>
      <form className="space-form" onSubmit={(e) => props.onSubmit(e)}>
        <input
          type="number"
          min="1"
          id={car.productName}
          name={car.productName}
        />
        <Button type="submit" color="secondary" variant="contained">
          Add To Cart
        </Button>
      </form>

      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi.
      </p>
    </div>
  );
}
export default Productpage;
