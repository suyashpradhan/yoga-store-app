import React from "react";
import "./Wishlist.css";
import EmptyWishlist from "../../assets/images/empty-wishlist.svg";
import { useStateContext } from "../../Context";

export const Wishlist = () => {
  const { state, dispatch } = useStateContext();

  return (
    <div className="wrapper wrapper-fluid">
      <div className="wishlistBody">
        <img
          src={EmptyWishlist}
          alt="empty-wishlist"
          className="secondaryIcon"
        ></img>
        <h1 className="wishlistTitle">YOUR WISHLIST IS EMPTY</h1>
        <p className="wishlistSubtitle">
          Add items that you like to your wishlist.
        </p>
        <button
          onClick={() => {
            dispatch({ type: "ROUTE", payload: "products" });
          }}
          className="button button-secondary"
        >
          Continue Shopping
        </button>

        {/* <h1 className="wishlistTitle">My Wishlist (2)</h1> */}
      </div>
    </div>
  );
};
