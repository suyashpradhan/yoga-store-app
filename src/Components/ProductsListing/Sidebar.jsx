import React from "react";

export const Sidebar = () => {
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
        <h2 className="sidebarTitle">Ratings</h2>
        <div className="sidebarCollection">
          <div className="sidebarLists">
            <input type="checkbox" value="mats"></input>
            <label htmlFor="">
              <i className="far fa-star productIcon"></i>& above
            </label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="blankets"></input>
            <label htmlFor="">
              <i className="far fa-star productIcon"></i>& above
            </label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="clothing"></input>
            <label htmlFor="">
              <i className="far fa-star productIcon"></i>& above
            </label>
          </div>
          <div className="sidebarLists">
            <input type="checkbox" value="clothing"></input>
            <label htmlFor="">
              <i className="far fa-star productIcon"></i>& above
            </label>
          </div>
        </div>
      </div>

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
    </aside>
  );
};
