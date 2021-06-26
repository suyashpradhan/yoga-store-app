import React from "react";
import { useStateContext } from "../../Context";

export const Sort = () => {
  const { state, dispatch } = useStateContext();

  const sortHandler = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "HIGH_TO_LOW", payload: e.target.value });
    }
  };

  return (
    <>
      <select
        className="sortSelect"
        value={state.sortBy}
        onChange={(e) => sortHandler(e)}
      >
        <option value="default">Default</option>
        <option value="high_to_low">Price: High to Low</option>
        <option value="low_to_high">Price: Low to High</option>
        <option value="popularity">Popularity</option>
      </select>
    </>
  );
};
