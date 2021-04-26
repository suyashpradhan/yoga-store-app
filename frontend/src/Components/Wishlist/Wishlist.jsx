import React from "react";
import { WishlistCard } from "./WishlistCard";
import "./Wishlist.css";
import EmptyWishlist from "../../assets/images/empty-wishlist.svg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
  } = useStateContext();

  return (
    <div className="wrapper wrapper-fluid">
      <div className="wishlistBody">
        {itemsInWishlist.length !== 0 ? (
          <WishlistCard />
        ) : (
          <>
            <img
              src={EmptyWishlist}
              alt="empty-wishlist"
              className="secondaryIcon"
            ></img>
            <h1 className="wishlistTitle">YOUR WISHLIST IS EMPTY</h1>
            <p className="wishlistSubtitle">
              Add items that you like to your wishlist.
            </p>
            <Link to="/products">
              <button className="button button-secondary">
                Continue Shopping
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
