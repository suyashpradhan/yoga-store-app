import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../Components/Home";
import { ProductsListing } from "../Components/ProductsListing";
import { ProductDetails } from "../Pages/ProductDetails/ProductDetails";
import { SignIn } from "../Pages/SignIn/SignIn";
import { SignUp } from "../Pages/SignUp/SignUp";
import { PrivateRoutes } from "./private-routes";
import { Bag } from "../Pages/Bag";
import { Wishlist } from "../Pages/Wishlist";

export const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/products" element={<ProductsListing />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products/:_id" element={<ProductDetails />}></Route>
        <PrivateRoutes
          exact
          path="/wishlist"
          element={<Wishlist />}
        ></PrivateRoutes>
        <PrivateRoutes exact path="/bag" element={<Bag />}></PrivateRoutes>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route exact path="/register" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};
