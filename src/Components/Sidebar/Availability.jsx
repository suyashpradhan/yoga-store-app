import React from "react";
import { useStateContext } from "../../Context";

export const Availability = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Availability</h2>
      <div className="sidebarLists">
        <input
          type="checkbox"
          checked={state.filters.includeOutOfStock}
          onChange={() => {
            dispatch({
              type: "INCLUDE_OUT_OF_STOCK",
              payload: !state.filters.includeOutOfStock,
            });
          }}
        ></input>
        <label htmlFor="">Include Out of Stock</label>
      </div>
    </div>
  );
};
