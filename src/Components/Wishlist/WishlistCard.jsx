import React, { useEffect } from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import axios from "axios";

export const WishlistCard = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useStateContext();

  return (
    <>
      <h1 className="wishlistTitle">
        My Wishlist <span>({itemsInWishlist.length} items)</span>
      </h1>
      <div className="wishlistItem">
        {itemsInWishlist.map((product) => {
          return (
            <>
              <div className="card">
                <div className="cardTop">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cardImage"
                  ></img>
                </div>
                <div className="cardBody">
                  <h1 className="productName">{product.name}</h1>
                  <h2 className="productCategory">{product.category}</h2>
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
                <button className="closeButton">
                  <img src={CloseButton} className="icons" alt="close"></img>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
