import React from "react";
import { Product } from "./Product";
import "./ProductsListing.css";
import { useStateContext } from "../../Context";
import { Sort } from "./Sort";
import { Sidebar } from "../Sidebar/";

export const ProductsListing = () => {
  const {
    state: { products, sortBy, inStock },
  } = useStateContext();

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

  return (
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
