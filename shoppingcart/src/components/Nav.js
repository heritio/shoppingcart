import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Nav() {
  return (
    <nav>
      <Link className="logo-style" to="/">
        <h1>getCars</h1>
      </Link>

      <ul>
        <Link className="link-style" to="/">
          <HomeIcon />
          <li>Home</li>
        </Link>
        <Link className="link-style" to="/shop">
          <StorefrontIcon />
          <li>Shop</li>
        </Link>
        <Link className="link-style" to="/checkout">
          <ShoppingCartIcon />
          <li>Checkout</li>
        </Link>
      </ul>
    </nav>
  );
}
