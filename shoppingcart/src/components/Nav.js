import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="logo-style" to="/">
        <h1>getCars</h1>
      </Link>

      <ul>
        <Link className="link-style" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-style" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link-style" to="checkout">
          <li>Checkout</li>
        </Link>
      </ul>
    </nav>
  );
}
