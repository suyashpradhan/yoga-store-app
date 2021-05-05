import React, { useEffect } from "react";
import axios from "axios";
import { Header } from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";
import { Mats } from "./Components/Categories/Mats";
import { Toast } from "./Components/Toast/Toast";
import { useStateContext } from "./Context/context";

export const App = () => {
  const { dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://apiyogastore.suyashpradhan.repl.co/products"
      );
      console.log(response.data[0]);
      dispatch({ type: "SHOW_PRODUCTS", payload: response.data });
    })();
  }, []);

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
    </>
  );
};
