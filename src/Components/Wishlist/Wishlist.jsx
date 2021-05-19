import React, { useEffect } from "react";
import { WishlistCard } from "./WishlistCard";
import "./Wishlist.css";
import EmptyWishlist from "../../assets/images/empty-wishlist.svg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";
import axios from "axios";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://apiyogastore.suyashpradhan.repl.co/wishlist"
        );
        dispatch({ type: "SET_WISHLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  console.log(itemsInWishlist);

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
