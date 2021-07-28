import React from "react";
import { useStateContext } from "../../context";
import { categories } from "../../exports";

export const Categories = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Categories</h2>
      <div className="sidebarCollection">
        {categories.map((category) => {
          return (
            <div className="sidebarLists" key={category}>
              <input
                type="checkbox"
                checked={state.filters.filterByCategories.includes(category)}
                onChange={() => {
                  dispatch({ type: "FILTER_BY_CATEGORIES", payload: category });
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
