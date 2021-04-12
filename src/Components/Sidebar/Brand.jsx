import React from "react";

export const Brand = () => {
  return (
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
  );
};
