import React from "react";
import { useStateContext } from "../../Context";
import { discounts } from "../../exports";

export const Discounts = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Discounts</h2>
      <div className="sidebarCollection">
        {discounts.map((discount) => {
          return (
            <div className="sidebarLists" key={discount}>
              <input
                type="checkbox"
                checked={state.filters.filterByDiscounts.includes(discount)}
                onChange={() => {
                  dispatch({ type: "FILTER_BY_DISCOUNTS", payload: discount });
                }}
              ></input>
              <label>{discount} % or more</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
