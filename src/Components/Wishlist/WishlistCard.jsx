import React from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import { removeItemFromWishlist } from "../../server-requests";

export const WishlistCard = ({ wishlist }) => {
  const { dispatch } = useStateContext();

  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img
            src={wishlist.image}
            alt={wishlist.name}
            className="cardImage"
          ></img>
        </div>
        <div className="cardBody">
          <h1 className="productName">{wishlist.name}</h1>
          <h2 className="productCategory">{wishlist.category}</h2>
          <span className="productRating">
            3 / 5.0
            <img src={Star} alt="ratings" className="cardIcon-sm" />
          </span>

          <div className="cardFooter flex j-space-between a-items-center">
            <button type="button" className="button button-secondary">
              MOVE TO BAG
            </button>
          </div>
        </div>
        <button
          className="closeButton"
          onClick={() => removeItemFromWishlist(dispatch, wishlist)}
        >
          <img src={CloseButton} className="icons" alt="close"></img>
        </button>
      </div>
    </>
  );
};
