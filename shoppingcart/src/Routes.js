import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Shop from "./components/Shop/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";
import ProductPage from "./components/Shop/Productpage";
import carData from "./components/Shop/carData";

function Routes() {
  const [cars, setCars] = useState(carData);
  const [cart, setCart] = useState([]);

  function findCar(productName) {
    let ourCar = cars.filter((car) => car.productName === productName);
    return ourCar;
  }

  function addItem(e) {
    e.preventDefault();
    const productInput = e.target.elements[0];
    const ourCar = findCar(productInput.name);

    /*if (cart.some((item) => item.productName === productInput.name)) {
      setCart([...cart, { ...ourCar, qty: item.qty + 1 }]);
    }*/

    setCart([...cart, { ourCar: ourCar[0], qty: productInput.value }]);
  }

  function deleteItem(e) {}

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/checkout"
          render={(props) => (
            <Checkout {...props} cart={cart} deleteItem={deleteItem} />
          )}
        />
        <Route
          exact
          path="/shop"
          render={(props) => <Shop {...props} cars={cars} addItem={addItem} />}
        />
        <Route
          path="/shop/:productName"
          render={(props) => (
            <ProductPage {...props} cars={cars} addItem={addItem} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
