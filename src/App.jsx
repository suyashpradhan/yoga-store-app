import React from "react";
import { Header } from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";
import { Mats } from "./Components/Categories/Mats";
import { Toast } from "./Components/Toast/Toast";

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
        <Route exact path="/yoga-mats">
          <Mats />
        </Route>
      </Switch>
      <Toast type="SUCCESS" interval={2000} />
    </>
  );
};
