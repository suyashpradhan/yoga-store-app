import React from "react";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";
import { ProductsListing } from "./Components/ProductsListing";
import { useStateContext } from "./Context";
import "./assets/styles/main.css";

export const App = () => {
  const { state } = useStateContext();
  return (
    <>
      <Header />
      {state.route === "home" && <Home />}
      {state.route === "wishlist" && <Wishlist />}
      {state.route === "bag" && <Bag />}
      {state.route === "products" && <ProductsListing />}
    </>
  );
};
