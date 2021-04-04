import React from "react";
import { Header } from "./Components/Header";
import "./assets/styles/main.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/products">
          <ProductsListing />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/wishlist">
          <Wishlist />
        </Route>
        <Route exact path="/bag">
          <Bag />
        </Route>
      </Switch>
    </>
  );
};
