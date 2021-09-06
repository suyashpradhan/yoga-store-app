import { useStateContext, useAuth } from "../../context";
import wishlist from "../../assets/images/wishlist.svg";
import wishlistFilled from "../../assets/images/wishlist-filled.svg";
import { isAlreadyAdded } from "../../utils";
import { actionOnUserWishlist } from "../../server-requests/index";

export const AddToWishlist = ({ product }) => {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const {
    state: { itemsInWishlist, itemsInTempWishlist, isLoading },
    dispatch,
  } = useStateContext();

  const isAlreadyInWishlist = isAlreadyAdded(
    [...itemsInWishlist, ...itemsInTempWishlist],
    product._id
  );

  const addProductToLocalStorage = (product) => {
    if (isLoggedIn) {
      dispatch({ type: "TOGGLE_PRODUCT_TO_WISHLIST", payload: product });
    } else {
      dispatch({ type: "TOGGLE_TO_TEMP_WISHLIST", payload: product });
    }
  };

  return (
    <>
      <button
        className="iconWrap"
        type="button"
        onClick={() => {
          isLoggedIn
            ? actionOnUserWishlist(product, dispatch, isLoading)
            : dispatch({
                type: "TOGGLE_TOAST",
                payload: "Added to wishlist ",
              });
          addProductToLocalStorage(product);
        }}
      >
        {isAlreadyInWishlist ? (
          <img src={wishlistFilled} alt="" className="cardIcon" />
        ) : (
          <img src={wishlist} alt="" className="cardIcon" />
        )}
      </button>
    </>
  );
};
