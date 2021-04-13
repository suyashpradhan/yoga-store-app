import React from "react";
import { useStateContext } from "../../Context";

export const Brand = () => {
  const { state, dispatch } = useStateContext();

  console.log(state.brand);

  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Brand</h2>
      <div className="sidebarCollection">
        <div className="sidebarLists">
          <input
            type="checkbox"
            checked={state.brand}
            onChange={() => {
              dispatch({ type: "BRAND_NIKE" });
            }}
          ></input>
          <label htmlFor="">Nike</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="puma"></input>
          <label htmlFor="">Puma</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="reebok"></input>
          <label htmlFor="">Reebok</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="adidas"></input>
          <label htmlFor="">Adidas</label>
        </div>
      </div>
    </div>
  );
};
