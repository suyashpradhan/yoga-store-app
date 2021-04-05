import React from "react";
import "./Bag.css";
import { useStateContext } from "../../Context";

export const BagCard = () => {
  const {
    state: { itemsInBag },
    dispatch,
  } = useStateContext();

  return (
    <div className="bagItem">
      <div className="productImage">
        <img
          src="https://source.unsplash.com/random/150x225"
          alt="productImage"
        ></img>
      </div>
    </div>
  );
};
