import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { ToastContainer } from "./Components/Toast";
import { useEffect } from "react";
import axios from "axios";
import { useStateContext } from "./Context";

export const App = () => {
  const { dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/products"
        );
        dispatch({ type: "SHOW_PRODUCTS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/wishlist"
        );
        dispatch({ type: "SET_WISHLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/cart"
        );
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
      </Routes>
    </>
  );
};
