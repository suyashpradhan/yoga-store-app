import React from "react";

export const Categories = () => {
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Categories</h2>
      <div className="sidebarCollection">
        <div className="sidebarLists">
          <input type="checkbox" value="mats"></input>
          <label htmlFor="">Mats</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="blankets"></input>
          <label htmlFor="">Blankets</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="clothing"></input>
          <label htmlFor="">Clothing</label>
        </div>
      </div>
    </div>
  );
};
