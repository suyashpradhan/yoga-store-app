import React from "react";
import { useStateContext } from "../../Context";

export const Sort = () => {
  const { dispatch } = useStateContext();
  return (
    <>
      <select className="sortSelect">
        <option value="new">What's New</option>
        <option value="new">Popularity</option>
        <option
          value="new"
          onClick={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
        >
          Price: High to Low
        </option>
        <option value="new">Price: Low to High</option>
      </select>
      {/* <label>
        <input
          type="radio"
          name="sort"
          onChange={() =>
            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
          }
          checked={state.sortBy && state.sortBy === "PRICE_HIGH_TO_LOW"}
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
          checked={state.sortBy && state.sortBy === "PRICE_LOW_TO_HIGH"}
        ></input>
        Price - Low to High
      </label>

      <fieldset style={{ marginTop: "1rem" }}>
        <input
          type="checkbox"
          checked={state.fastDelivery}
          onChange={() => {
            dispatch({ type: "FAST_DELIVERY" });
          }}
        />
        <label>Fast delivery</label>

        <input
          type="checkbox"
          checked={state.isPopular}
          onChange={() => {
            dispatch({ type: "POPULAR" });
          }}
        />
        <label>Popular</label>
      </fieldset> */}
    </>
  );
};
