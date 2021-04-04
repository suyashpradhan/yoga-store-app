import React from "react";
import "./Bag.css";
import EmptyBag from "../../assets/images/empty-bag.svg";
import { useStateContext } from "../../Context";

export const Bag = () => {
  const { state, dispatch } = useStateContext();
  return (
    <div className="wrapper wrapper-fluid">
      <div className="wishlistBody">
        <img
          src={EmptyBag}
          alt="empty-wishlist"
          className="secondaryIcon"
        ></img>
        <h1 className="wishlistTitle">YOUR BAG IS EMPTY</h1>
        <p className="wishlistSubtitle">
          There is nothing in your bag. Let's add some items
        </p>
        <button
          onClick={() => {
            dispatch({ type: "ROUTE", payload: "wishlist" });
          }}
          className="button button-secondary"
        >
          ADD ITEMS FROM WISHLIST
        </button>
        {/*         <h1 className="wishlistTitle">My Bag {state.itemsInBag.length}</h1>
         */}{" "}
      </div>
    </div>
  );
};
