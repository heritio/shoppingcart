import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="banner">
        <h1>Luxury Cars for your Satisfaction</h1>
        <Link className="link-style" to="/shop">
          <Button className="home-btn" color="primary" variant="contained">
            Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
