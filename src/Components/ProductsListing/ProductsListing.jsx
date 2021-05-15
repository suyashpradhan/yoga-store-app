import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import "./ProductsListing.css";
import { useStateContext } from "../../Context";
import { Sort } from "./Sort";
import { Sidebar } from "../Sidebar/";
import axios from "axios";
import Loader from "react-loader-spinner";

export const ProductsListing = () => {
  const [loader, setLoader] = useState(false);

  const {
    state: { products, sortBy, inStock },
    dispatch,
  } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/products"
        );
        if (response.status === 200) {
          dispatch({ type: "SHOW_PRODUCTS", payload: response.data });
        }
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const getSortedData = (productList, sortBy) => {
    if (sortBy === "high_to_low") {
      return [...productList].sort(
        (a, b) => b.discountedPrice - a.discountedPrice
      );
    }
    if (sortBy === "low_to_high") {
      return [...productList].sort(
        (a, b) => a.discountedPrice - b.discountedPrice
      );
    }
    return productList;
  };

  function getFilteredData(productList, filterType) {
    return productList.filter(({ inStock }) =>
      filterType.inStock ? true : inStock
    );
  }

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, {
    inStock,
  });

  return loader ? (
    <div className="loaderRow">
      <Loader type="Oval" color="#0c6ff9" height={80} width={80} />
    </div>
  ) : (
    <div className="wrapper-fluid ">
      <div className="pageLayout">
        <Sidebar />
        <main className="mainSection">
          <div className="mainTopSection mT4 flex j-space-between a-items-center">
            <h2 className="sectionTopTitle ">
              All Products
              <span> (Showing {filteredData.length} products)</span>
            </h2>
            <Sort />
          </div>
          <div className="products">
            {filteredData.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};
