import React from "react";
import { useStateContext } from "../../Context";
import { brand } from "../../Database/database";

export const Brand = () => {
  const { state, dispatch } = useStateContext();

  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Brand</h2>
      <div className="sidebarCollection">
        {brand.map((brand) => {
          return (
            <div className="sidebarLists" key={brand}>
              <input type="checkbox"></input>
              <label htmlFor="">{brand}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
