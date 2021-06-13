import React, { useEffect } from "react";
import { WishlistCard } from "../../Components/Wishlist/WishlistCard";
import "../../Components/Wishlist/Wishlist.css";
import EmptyWishlist from "../../assets/images/empty-wishlist.svg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";
import axios from "axios";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  const totalItemsCountInWishlist = itemsInWishlist.length;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:4000/wishlist");
        dispatch({ type: "SET_WISHLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className="wrapper wrapper-fluid">
      <div className="wishlistBody">
        {totalItemsCountInWishlist > 0 && (
          <>
            <h1 className="wishlistTitle">
              My Wishlist <span>({totalItemsCountInWishlist} items)</span>
            </h1>
            <div className="wishlistItem">
              {itemsInWishlist.map((wishlist) => (
                <WishlistCard key={wishlist._id} wishlist={wishlist} />
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
