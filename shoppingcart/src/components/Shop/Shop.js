import "./Shop.css";
import React, { useState, useEffect } from "react";
import carData from "./carData";
import Card from "./Card";
export default function Shop() {
  const [cars, setCars] = useState(carData);

  return (
    <div className="shop-container">
      {cars.map((car) => (
        <Card
          key={car.id}
          name={car.name}
          price={car.price}
          src={car.source}
          productName={car.productName}
        />
      ))}
    </div>
  );
}
