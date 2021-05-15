import { Header } from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProductsListing } from "./Components/ProductsListing";
import { Wishlist } from "./Components/Wishlist";
import { Bag } from "./Components/Bag";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { ToastContainer } from "./Components/Toast";

export const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
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
        <Route exact path="/products/:_id">
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
};
