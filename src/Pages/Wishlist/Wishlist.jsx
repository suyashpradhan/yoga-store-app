import React from "react";
import { WishlistCard } from "../../components/Wishlist/WishlistCard";
import "../../components/Wishlist/Wishlist.css";
import EmptyWishlist from "../../assets/images/empty-wishlist.svg";
import { useAuth, useStateContext } from "../../context";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist, itemsInTempWishlist },
  } = useStateContext();

  console.log(itemsInTempWishlist);

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  const totalItemsCountInWishlist = isLoggedIn
    ? itemsInWishlist.length
    : itemsInTempWishlist.length;

  return (
    <div className="wrapper wrapper-fluid">
      <div className="wishlistBody">
        {totalItemsCountInWishlist > 0 && (
          <>
            <h1 className="wishlistTitle">
              My Wishlist <span>({totalItemsCountInWishlist} items)</span>
            </h1>
            <div className="wishlistItem">
              {!isLoggedIn
                ? itemsInTempWishlist.map((product) => (
                    <WishlistCard key={product._id} product={product} />
                  ))
                : itemsInWishlist.map((product) => (
                    <WishlistCard key={product._id} product={product} />
                  ))}
            </div>
          </>
        )}
        {totalItemsCountInWishlist === 0 && (
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
