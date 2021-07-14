import React from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import { actionOnUserWishlist } from "../../server-requests";
import { isAlreadyAdded } from "../../utils";
import { Link } from "react-router-dom";
import { useToastHook } from "../../CustomHooks/useToast";

const itemExistsInBag = (itemsInBag, productId) =>
  itemsInBag.some((product) => product._id === productId);

export const WishlistCard = ({ product }) => {
  const toast = useToastHook(3000);

  const {
    state: { itemsInWishlist, itemsInBag },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  const isItemInBag = itemExistsInBag(itemsInBag, product._id);

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
                  actionOnUserWishlist(product, dispatch, isAlreadyInWishlist);
                }}
              >
                Move To Bag
              </button>
            )}
          </div>
        </div>
        <button
          className="closeButton"
          onClick={() => {
            actionOnUserWishlist(product, dispatch, isAlreadyInWishlist);
            toast("success", "Product removed from wishlist");
          }}
        >
          <img src={CloseButton} className="icons" alt="close"></img>
        </button>
      </div>
    </>
  );
};
