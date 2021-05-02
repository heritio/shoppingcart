import React, { useState, useEffect } from "react";
import carData from "./carData";

function Productpage({ match }) {
  useEffect(() => {
    let filtered = carData.filter(
      (car) => car.productName === match.params.productName
    );
    setCar(filtered[0]);
  }, [match]);

  const [car, setCar] = useState({});

  return (
    <div>
      <h1>{car?.name}</h1>
      <img src={car?.source} alt={car?.name} />
      <p>{car?.price}</p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi.
      </p>
    </div>
  );
}
export default Productpage;
