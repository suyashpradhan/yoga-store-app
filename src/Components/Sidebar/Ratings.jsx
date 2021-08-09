import React from "react";
import { useStateContext } from "../../context";
import { AiFillStar } from "react-icons/ai";

const ratings = [1.0, 2.0, 3.0, 4.0];

export const Ratings = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Ratings</h2>
      <div className="sidebarCollection">
        {ratings.map((rating) => {
          return (
            <div className="sidebarLists" key={rating}>
              <input
                type="checkbox"
                checked={state.filters.filterByRatings.includes(rating)}
                onChange={() => {
                  dispatch({ type: "FILTER_BY_RATINGS", payload: rating });
                }}
              ></input>
              <label>
                {rating}
                <AiFillStar className="filterIcons" /> & above{" "}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
