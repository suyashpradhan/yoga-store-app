import React from "react";
import clothing from "../../assets/images/clothing.jpg";

export const Clothing = () => {
  return (
    <div className="categories categoryThree">
      <div className="overlay">
        <a href="0">
          <img src={clothing} alt="mats" className="sectionImage"></img>
          <h3 className="overlayText">
            Stay comfortable yet stylish while doing yoga.
          </h3>
        </a>
      </div>
      <button className="button button-secondary block">SHOP NOW</button>
    </div>
  );
};
