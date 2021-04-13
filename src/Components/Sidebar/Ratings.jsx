import React from "react";

export const Ratings = () => {
  return (
    <div className="sidebarSection border-none">
      <h2 className="sidebarTitle">Ratings</h2>
      <div className="sidebarCollection">
        <div className="sidebarLists">
          <input type="checkbox" value="mats"></input>
          <label htmlFor="">
            4 <i className="far fa-star productIcon"></i>& above
          </label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="blankets"></input>
          <label htmlFor="">
            3 <i className="far fa-star productIcon"></i>& above
          </label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="clothing"></input>
          <label htmlFor="">
            2 <i className="far fa-star productIcon"></i>& above
          </label>
        </div>
        <div className="sidebarLists">
          <input type="checkbox" value="clothing"></input>
          <label htmlFor="">
            1 <i className="far fa-star productIcon"></i>& above
          </label>
        </div>
      </div>
    </div>
  );
};
