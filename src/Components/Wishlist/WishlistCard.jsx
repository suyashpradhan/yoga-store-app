import React from "react";
import { useStateContext } from "../../Context";
import CloseButton from "../../assets/images/close.svg";
import Star from "../../assets/images/star.svg";
import { actionOnUserWishlist } from "../../server-requests";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserBag } from "../../server-requests";
import { Link } from "react-router-dom";

const itemExistsInBag = (itemsInBag, productId) =>
  itemsInBag.some((product) => product._id === productId);

export const WishlistCard = ({ product }) => {
  const {
    state: { itemsInWishlist, itemsInBag },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(itemsInWishlist, product._id);

  const isItemInBag = itemExistsInBag(itemsInBag, product._id);

  /*  const bagHandler = () => {
    actionOnUserBag(product, "ADD_PRODUCT_IN_BAG", dispatch);
  }; */

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
                  /* bagHandler(product, "ADD_PRODUCT_IN_BAG", dispatch); */
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
          onClick={() =>
            actionOnUserWishlist(product, dispatch, isAlreadyInWishlist)
          }
        >
          <img src={CloseButton} className="icons" alt="close"></img>
        </button>
      </div>
    </>
  );
};
