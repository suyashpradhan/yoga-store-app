import React from "react";
import banner from "../assets/images/banner.jpg";

export const Banner = () => {
  return (
    <>
      <div className="banner">
        <a href="0">
          <img src={banner} alt="yoga_life" className="banner img-fluid"></img>
        </a>
      </div>
    </>
  );
};
