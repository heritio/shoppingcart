import "./Shop.css";
import React, { useState, useEffect } from "react";

import Card from "./Card";
export default function Shop(props) {
  return (
    <div className="shop-container">
      {props.cars.map((car) => (
        <Card
          key={car.id}
          name={car.name}
          price={car.price}
          src={car.source}
          productName={car.productName}
          onSubmit={props.addItem}
        />
      ))}
    </div>
  );
}
