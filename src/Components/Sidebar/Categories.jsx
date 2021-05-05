import React from "react";
import { useStateContext } from "../../Context";
import { category } from "../../exports";

export const Categories = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Categories</h2>
      <div className="sidebarCollection">
        {category.map((category) => {
          return (
            <div className="sidebarLists" key={category}>
              <input
                type="checkbox"
                /* checked={state.filters.brand.includes(category)} */
                onChange={() => {
                  dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
                }}
              ></input>
              <label>{category}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
