import React from "react";
import { useStateContext } from "../../Context";

export const Sidebar = () => {
  const { state, dispatch } = useStateContext();

  return (
    <aside className="sidebar">
      <div className="sidebarSection flex j-space-between a-items-center">
        <h2 className="sidebarTitle">Filters</h2>
        <button className="link link-secondary">Clear filters</button>
      </div>

      <div className="sidebarSection border-none">
        <h2 className="sidebarTitle">Brand</h2>
        <div className="sidebarCollection">
          <div className="sidebarLists">
            <input type="checkbox" value="nuke"></input>
            <label htmlFor="">Nuke</label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="suma"></input>
            <label htmlFor="">Suma</label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="beebok"></input>
            <label htmlFor="">Beebok</label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="abibas"></input>
            <label htmlFor="">Abibas</label>
          </div>
        </div>
      </div>

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

      <div className="sidebarSection border-none">
        <h2 className="sidebarTitle">Availability</h2>
        <div className="sidebarLists">
          <input type="checkbox" value="available"></input>
          <label htmlFor="">Exclude Out of Stock</label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="available"></input>
          <label htmlFor="">Include Out of Stock</label>
        </div>
      </div>
    </aside>
  );
};
