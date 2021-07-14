import React from "react";
import { useStateContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { actionOnBag } from "../../server-requests";
import { actionOnUserWishlist } from "../../server-requests";
import { useAuth } from "../../Context/auth-context";
import { useToastHook } from "../../CustomHooks/useToast";

const itemExistsInBag = (itemsInBag, productId) =>
  itemsInBag.some((product) => product._id === productId);

export const itemExists = (array, id) => array.some((item) => item._id === id);

export const AddToBag = ({ product }) => {
  const toast = useToastHook(3000);

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
      <button
        type="button"
        className={
          isItemInBag
            ? "button button-primary button-width"
            : "button button-secondary button-width"
        }
        onClick={() => {
          isItemInBag
            ? navigate("/bag")
            : isLoggedIn
            ? isWishlisted
              ? updateLists()
              : actionOnBag(product, "ADD_PRODUCT_IN_BAG", dispatch)
            : dispatch({
                type: "ADD_PRODUCT",
                payload: product,
              });
          toast("success", "Added product in bag");
        }}
      >
        {isItemInBag ? "Go to Bag" : "Add to Bag"}
      </button>
    </>
  );
};
