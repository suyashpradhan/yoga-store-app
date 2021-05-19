import React from "react";
import { Product } from "./Product";
import "./ProductsListing.css";
import { useStateContext } from "../../Context";
import { Sort } from "./Sort";
import { Sidebar } from "../Sidebar/";
import Loader from "react-loader-spinner";
import { getFilteredData, getSortedData } from "./DataFilters";

export const ProductsListing = () => {
  const { state } = useStateContext();

  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(state, sortedData);

  return state.loader ? (
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
