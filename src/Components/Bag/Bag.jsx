import React from "react";
import "./Bag.css";
import EmptyBag from "../../assets/images/empty-bag.svg";
import { useStateContext } from "../../Context";
import { BagCard } from "./BagCard";
import { PriceDetails } from "./PriceDetails";

export const Bag = () => {
  const {
    state: { itemsInBag },
  } = useStateContext();
  console.log(itemsInBag);

  return (
    <div className="wrapper wrapper-fluid">
      <div className="bagBody">
        {itemsInBag.length !== 0 ? (
          <>
            <h1 className="bagMainTitle">
              My Shopping Bag <span> ({itemsInBag.length} items) </span>
            </h1>
            <div className="bagRow">
              <BagCard />
              <PriceDetails />
            </div>
          </>
        ) : (
          <>
            <img src={EmptyBag} alt="empty-bag" className="secondaryIcon"></img>
            <h1 className="bagMainTitle">YOUR BAG IS EMPTY</h1>
            <p className="bagSubTitle">
              There is nothing in your bag. Let's add some items
            </p>
            <button className="button button-secondary">
              ADD ITEMS FROM WISHLIST
            </button>
          </>
        )}
      </div>
    </div>
  );
};
