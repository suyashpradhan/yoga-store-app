import React from "react";
import { Sidebar } from "./Sidebar";
import { Product } from "./Product";
import "./ProductsListing.css";
import { useStateContext } from "../../Context";
import { Sort } from "./Sort";

export const ProductsListing = () => {
  const {
    state: {
      products,
      sortFilterStates: { inStock, fastDelivery, sortBy },
    },
  } = useStateContext();

  const getSortedData = (productList, sortBy) => {
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return [...productList].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return [...productList].sort((a, b) => a.price - b.price);
    }
    return productList;
  };

  function getFilteredData(productList, filterType) {
    return productList
      .filter(({ inStock }) => (filterType.inStock ? true : inStock))
      .filter(({ fastDelivery }) =>
        filterType.fastDelivery ? fastDelivery : true
      );
  }

  const sortedData = getSortedData(products, sortBy);

  const filteredData = getFilteredData(sortedData, {
    inStock,
    fastDelivery,
  });

  return (
    <div className="wrapper-fluid">
      <div className="pageLayout ">
        <Sidebar />
        <main className="mainSection">
          <div className="mainTopSection mT4 flex j-space-between a-items-center">
            {/* {state.isLoading ? (
              <h2 className="sectionTopTitle">Data Loading...</h2>
            ) : (
              <h2 className="sectionTopTitle ">
                All Products
                <span> (Showing {state.products.length} products)</span>
              </h2>
            )} */}
            <div className="sort">
              <Sort />
            </div>
          </div>
          <div className="products">
            {filteredData.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};
