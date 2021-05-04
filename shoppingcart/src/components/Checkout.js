import React from "react";
import "./App.css";
export default function Checkout(props) {
  console.log(props);
  return (
    <div className="checkout">
      {props?.cart.length === 0 ? (
        <h1>Shopping Cart Is Empty</h1>
      ) : (
        props?.cart.map((cartItem) => (
          <div className="sizing-checkout" key={cartItem.ourCar.productName}>
            <h3>{cartItem.ourCar.name}</h3>
            <img
              className="img-size"
              src={cartItem.ourCar.source}
              alt={cartItem.ourCar.productName}
            />
            <div className="fullwidth">
              <p>{cartItem.ourCar.price * cartItem.qty}</p>
              <div className="row">
                <div
                  className="cursors "
                  onClick={() => props.deleteItem(cartItem.ourCar.productName)}
                >
                  -
                </div>
                <div className="ourBorder">{cartItem.qty}</div>
                <div className="cursors">+</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
