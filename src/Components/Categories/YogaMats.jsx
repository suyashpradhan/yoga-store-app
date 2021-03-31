import React from "react";
import mats from "../../assets/images/mats.jpg";

export const YogaMats = () => {
  return (
    <div className="categories categoryOne">
      <div className="overlay">
        <a href="0">
          <img src={mats} alt="mats" className="sectionImage"></img>
          <h3 className="overlayText">Yoga Mats</h3>
        </a>
      </div>
      <button className="button button-secondary block">SHOP NOW</button>
    </div>
  );
};
