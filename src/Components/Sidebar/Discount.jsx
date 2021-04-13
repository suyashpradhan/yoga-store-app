import React from "react";

export const Discount = () => {
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Discount</h2>
      <div className="sidebarCollection">
        <div className="sidebarLists">
          <input type="checkbox" value="mats"></input>
          <label htmlFor="">20% Discount</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="blankets"></input>
          <label htmlFor="">30% Discount</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="clothing"></input>
          <label htmlFor="">50% Discount</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="clothing"></input>
          <label htmlFor="">70% Discount</label>
        </div>
      </div>
    </div>
  );
};
