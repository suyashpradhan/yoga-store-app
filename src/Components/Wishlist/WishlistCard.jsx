import React from "react";
import { useAuth, useStateContext } from "../../context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import { actionOnBag, actionOnUserWishlist } from "../../server-requests";
import { isAlreadyAdded } from "../../utils";
import { Link } from "react-router-dom";

const itemExistsInBag = (itemsInBag, productId) =>
  itemsInBag.some((product) => product._id === productId);

export const WishlistCard = ({ product }) => {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const {
    state: { itemsInWishlist, itemsInBag },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  const isItemInBag = itemExistsInBag(itemsInBag, product._id);

  return (
    <>
      <div className="card">
        <button
          className="closeButton"
          onClick={() => {
            actionOnUserWishlist(product, dispatch, isLoggedIn);
          }}
        >
          <img src={CloseButton} className="icons" alt="close"></img>
        </button>
        <Link to={`/products/${product._id}`}>
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
            <h3 className="productPrice">Rs {product.discountedPrice}</h3>
            <h4 className="actualPrice">Rs {product.originalPrice}</h4>
            <h4 className="offer mR1 ">{product.discount} % </h4>
            <span className="productRating inline-block">
              3 / 5.0
              <img src={Star} alt="ratings" className="cardIcon-sm" />
            </span>

            <div className="cardFooter flex j-space-between a-items-center">
              {isItemInBag ? (
                <Link to="/bag">
                  <button type="button" className="button button-secondary">
                    Go To Bag
                  </button>
                </Link>
              ) : (
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => {
                    actionOnUserWishlist(
                      product,
                      dispatch,
                      isAlreadyInWishlist
                    );
                    actionOnBag(product, dispatch);
                  }}
                >
                  Move To Bag
                </button>
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
