import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Pages/Wishlist";
import { Bag } from "./Pages/Bag/index";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { ToastContainer } from "./Components/Toast";
import { useEffect } from "react";
import axios from "axios";
import { useStateContext } from "./Context";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn/SignIn";

export const App = () => {
  const { dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        dispatch({ type: "SHOW_PRODUCTS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/wishlist");
        dispatch({ type: "SET_WISHLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/bag");
        dispatch({ type: "SET_CART", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/products" element={<ProductsListing />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/wishlist" element={<Wishlist />}></Route>
        <Route exact path="/bag" element={<Bag />}></Route>
        <Route exact path="/products/:_id" element={<ProductDetails />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route exact path="/register" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};
