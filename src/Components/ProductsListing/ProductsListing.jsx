import React, { useEffect } from "react";
import axios from "axios";
import { Sidebar } from "./Sidebar";
import { Product } from "./Product";
import "./ProductsListing.css";
import { useStateContext } from "../../Context";

export const ProductsListing = () => {
  const { state, dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        dispatch({ type: "SHOW_PRODUCTS", payload: products });
      } catch (error) {
        dispatch({ type: "FAILED_DATA" });
      }
    })();
  }, [dispatch]);

  return (
    <div className="wrapper-fluid">
      <div className="pageLayout ">
        <Sidebar />
        <main className="mainSection">
          <div className="mainTopSection mT4 flex j-space-between a-items-center">
            {state.isLoading ? (
              <h2 className="sectionTopTitle">Data Loading...</h2>
            ) : (
              <h2 className="sectionTopTitle ">
                All Products
                <span> (Showing {state.products.length} products)</span>
              </h2>
            )}

            <select name="" id="" className="sortSelect">
              <option value="new">What's New</option>
              <option value="new">Popularity</option>
              <option value="new">Price: High to Low</option>
              <option value="new">Price: Low to High</option>
            </select>
          </div>

          <div className="products">
            {state.products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};
