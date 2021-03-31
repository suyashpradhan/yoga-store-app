import React from "react";
import bag from "../assets/images/bag.svg";

export const Cart = () => {
  return (
    <div className="navWrap bag">
      <img src={bag} alt="wishlist" className="icons"></img>
      <h2 className="iconText">Bag</h2>
    </div>
  );
};
