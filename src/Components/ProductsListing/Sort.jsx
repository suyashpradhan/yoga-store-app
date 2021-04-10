import React from "react";
import { useStateContext } from "../../Context";

export const Sort = () => {
  const { state, dispatch } = useStateContext();
  return (
    <>
      {/* <select
        className="sortSelect"
        onChange={() =>
          dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
        }
      >
        <option value="new">What's New</option>
        <option value="new">Popularity</option>
        <option value="new">Price: High to Low</option>
        <option value="new">Price: Low to High</option>
      </select> */}
      <label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          checked={
            state.sortFilterStates.sortBy &&
            state.sortFilterStates.sortBy === "PRICE_HIGH_TO_LOW"
          }
        ></input>
        Price - High to Low
      </label>

      <label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
          }
          checked={
            state.sortFilterStates.sortBy &&
            state.sortFilterStates.sortBy === "PRICE_LOW_TO_HIGH"
          }
        ></input>
        Price - Low to High
      </label>

      <fieldset style={{ marginTop: "1rem" }}>
        <legend>Filter</legend>
        <input
          type="checkbox"
          checked={state.sortFilterStates.inStock}
          onChange={() => {
            dispatch({ type: "INCLUDE_OUT_OF_STOCK" });
          }}
        />
        <label>Include out of stock</label>
        <input
          type="checkbox"
          checked={state.sortFilterStates.fastDelivery}
          onChange={() => {
            dispatch({ type: "FAST_DELIVERY" });
          }}
        />
        <label>Fast delivery</label>
      </fieldset>
    </>
  );
};
