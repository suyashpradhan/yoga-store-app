import React from "react";
import { useStateContext } from "../../Context";
import { ratings } from "../../Database/database";

export const Ratings = () => {
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Ratings</h2>
      <div className="sidebarCollection">
        {ratings.map((ratings) => {
          return (
            <div className="sidebarLists" key={ratings}>
              <input type="checkbox" value="clothing"></input>
              <label htmlFor="">
                {ratings} <i className="far fa-star productIcon"></i>& above
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
