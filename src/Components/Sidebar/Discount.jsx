import React from "react";
import { useStateContext } from "../../Context/";
import { discount } from "../../exports";

export const Discount = () => {
  const { state, dispatch } = useStateContext();

  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Discount</h2>
      <div className="sidebarCollection">
        {discount.map((discount) => {
          return (
            <div className="sidebarLists" key={discount}>
              <input type="checkbox"></input>
              <label htmlFor="">{discount} % Discount</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
