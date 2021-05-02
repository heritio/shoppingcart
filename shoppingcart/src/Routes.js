import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";
import ProductPage from "./components/Shop/Productpage";

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:productName" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
