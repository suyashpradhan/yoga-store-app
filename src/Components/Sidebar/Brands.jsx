import React from "react";
import { useStateContext } from "../../context";

const brands = ["Puma", "Vero Moda", "Nike", "Forever 21"];

export const Brands = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Brands</h2>
      <div className="sidebarCollection">
        {brands.map((brand) => {
          return (
            <div className="sidebarLists" key={brand}>
              <input
                type="checkbox"
                checked={state.filters.filterByBrands.includes(brand)}
                onChange={() => {
                  dispatch({ type: "FILTER_BY_BRANDS", payload: brand });
                }}
              ></input>
              <label>{brand}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
