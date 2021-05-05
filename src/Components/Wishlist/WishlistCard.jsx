import React from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import { Link } from "react-router-dom";

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
                <div class="cardTop">
                  <img
                    src={product.image}
                    alt={product.name}
                    class="cardImage"
                  ></img>
                </div>
                <div class="cardBody">
                  <h1 class="productName">{product.name}</h1>
                  <h2 class="productCategory">{product.category}</h2>
                  <span class="productRating productRatingGreen">
                    <i class="far fa-star productIcon" aria-hidden="true"></i>
                    {product.ratings}
                  </span>
                  <div class="cardFooter flex j-space-between a-items-center">
                    <button type="button" class="button button-secondary">
                      MOVE TO BAG
                    </button>
                  </div>
                </div>
                <button
                  className="closeButton"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
                  }
                >
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
