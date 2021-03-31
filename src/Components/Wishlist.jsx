import React from "react";
import wishlist from "../assets/images/wishlist.svg";

export const Wishlist = () => {
  return (
    <div className="navWrap wishlist">
      <img src={wishlist} alt="wishlist" className="icons"></img>
      <h2 className="iconText">Wishlist</h2>
    </div>
  );
};
