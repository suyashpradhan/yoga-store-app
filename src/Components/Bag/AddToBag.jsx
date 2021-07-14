import React from "react";
import { useStateContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { actionOnBag } from "../../server-requests";
import { actionOnUserWishlist } from "../../server-requests";
import { useAuth } from "../../Context/auth-context";

const itemExistsInBag = (itemsInBag, productId) =>
  itemsInBag.some((product) => product._id === productId);

export const itemExists = (array, id) => array.some((item) => item._id === id);

export const AddToBag = ({ product }) => {
  const {
    state: { itemsInBag, itemsInWishlist },
    dispatch,
  } = useStateContext();
  const navigate = useNavigate();
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  const isWishlisted = itemExists(itemsInWishlist, product._id);
  const isItemInBag = itemExistsInBag(itemsInBag, product._id);

  const updateLists = () => {
    actionOnUserWishlist(product, isWishlisted, dispatch);
    actionOnBag(product, "ADD_PRODUCT_IN_BAG", dispatch);
  };

  return (
    <>
      {/* {isItemInBag ? (
        <Link to="/bag">
          <button className="button button-primary flex-1 mR1">
            GO TO BAG
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className="button button-secondary flex-1 mR1"
          onClick={() => {
            dispatch({
              type: "ADD_PRODUCT",
              payload: product,
            });
          }}
        >
          ADD TO BAG
        </button>
      )} */}

      <button
        type="button"
        className={
          isItemInBag ? "button button-primary" : "button button-secondary"
        }
        onClick={() => {
          isItemInBag
            ? navigate("/cart")
            : isLoggedIn
            ? isWishlisted
              ? updateLists()
              : actionOnBag(product, "ADD_PRODUCT_IN_BAG", dispatch)
            : dispatch({
                type: "ADD_PRODUCT",
                payload: product,
              });
        }}
      >
        {isItemInBag ? "Go to Cart" : "Add to Cart"}
      </button>
    </>
  );
};
