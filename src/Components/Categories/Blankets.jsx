import React from "react";
import blanket from "../../assets/images/blanket.jpg";

export const Blankets = () => {
  return (
    <div className="categories categoryTwo">
      <div className="overlay">
        <a href="0">
          <img src={blanket} alt="mats" className="sectionImage"></img>
          <h3 className="overlayText">Blankets</h3>
        </a>
      </div>
      <button className="button button-secondary block">SHOP NOW</button>
    </div>
  );
};
